import { createContext, useEffect, useState } from 'react';
import {
  Wrapper,
} from './AppStyle';
import Loading from './components/loading';
import SearchBar from './components/searchBar';
import TableCard from './components/tableCard/tableCard';
import PopUpCard from './components/popUpCard/popUpCard';
import ConfirmDeleteCard from './components/confirmDeleteCard/confirmDeleteCard';
import axios from 'axios';
import  Error  from './components/Error';

export const Context  = createContext();  
const url = 'https://crud-js-back.herokuapp.com';


function App() {
  const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState();
  const [showConfirmDeleteCard, setShowConfirmDeleteCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [items, setItems] = useState(null);
  const [filterItems, setFilterItems]= useState(items);
  const [category, setCategory] = useState(null);



const deleteItem = async (context) => {
    try {
          await axios.delete(`${url}`,{data: context.data});
          await getItems();
          context.setData(null);
          setShowConfirmDeleteCard(false);
    }catch(error){
      console.log(error.response.data);
      setShowConfirmDeleteCard(false);
      setError(true);
    }
}

  const getCategory = async () => {
    try {
      const res = await axios.get(`${url}/category`);
      setCategory(res.data);
    } catch (error) {
      setError(true);
    }
  };

  const getItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}`);
      setItems(res.data);
      setFilterItems(res.data);
      await getCategory();
      setLoading(false);
    } catch(error) {
      setError(true);
    }
  };

  const search = value => {
    const reg = new RegExp(value);
    const newItemList = items.filter( e => {
      if(e.name.match(reg)) return e;
    });
    setFilterItems(newItemList);
  };

  useEffect( () => {
    getItems();
  },[])


  return (
    <Wrapper>
      <Context.Provider value={{data, setData, url }}>
        {
          error ?
          <Error/>
          :
          loading ?
          <div className='animation'>
            <Loading/>
          </div>
          :
          <>
            <SearchBar handleSearch={search}/>
            <TableCard
                items={filterItems}              
                handleOpen={() => setShowCard(true)}
                handleConfirmDelete={setShowConfirmDeleteCard}
                handleLoading={setLoading}
            />
            {
              showCard && 
              <PopUpCard 
                handleClose={() => setShowCard(false)}
                category={category}
                handleItems={getItems}
                handleError={setError}
                handleGetCategory={getCategory}
              />
          }
          {
            showConfirmDeleteCard &&
            <ConfirmDeleteCard
                handleDelete={deleteItem}
                handleCancelDelete={() => setShowConfirmDeleteCard(false)}
            />
          }
          </>
      }
      </Context.Provider>
    </Wrapper>
  );
}

export default App;

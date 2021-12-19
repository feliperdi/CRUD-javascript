import { useState } from 'react';
import {
  Wrapper,
} from './AppStyle';
import TableCard from './components/tableCard';
import PopUpCard from './components/popUpCard';

const data = [
  {
      id: "123456798",
      name: "name teste afkjcm",
      stock: 12,
      b_price: 2,
      s_price: 12,
      category: "OTHERS"
  },
  {
    id: "123456798",
    name: "name teste2 afkjcm",
    stock: 12,
    b_price: 2,
    s_price: 12,
    category: "OTHERS"
  },
  {
    id: "123456798",
    name: "name teste3 afkjcm",
    stock: 12,
    b_price: 2,
    s_price: 12,
    category: "OTHERS"
},
]

function App() {
  const [showCard, setShowCard] = useState(true);
  
  const createItem = (data) => {

  }
  const editItem = (data) => {

  }
  const deleteItem = (data) => {

  }


  return (
    <Wrapper>
      <TableCard
          items={data}
      />
    {showCard && 
      <PopUpCard>
      
      </PopUpCard>
    }
    </Wrapper>
  );
}

export default App;

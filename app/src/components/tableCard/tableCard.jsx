import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import add_icon from '../../icons/add.svg';
import delete_icon from '../../icons/delete.svg';
import edit_icon from '../../icons/edit.svg';
import {
    Wrapper,
    Container,
    Header,
    Body,
    Row,
    ContextMenu,
    EditButton,
    DeleteButton,
    AddButton,
    
} from './style';

const TableCard = props => {
    const {items, handleConfirmDelete, handleEdit, handleOpen} = props;
    const [select, setSelect] = useState(null);
    const context = useContext(Context);

    const showMenu = id => {
        if(id === select) setSelect(null);
        else setSelect(id);
    };

    const deleteItem = (data) => {
        handleConfirmDelete(true);
        context.setData(data);
    }
    const editItem = (data) => {
        context.setData(data);
        handleOpen();
    };

    useEffect(() => {
        setSelect(null);
    },[items]);
    
    return (
        <Wrapper>
            <Container>
                <button id='create_item' onClick={handleOpen}>NEW ITEM</button>
                <Header>
                    <div>Name</div>
                    <div>Stock</div>
                    <div>B.Price</div>
                    <div>S.Price</div>
                    <div>Category</div>
                </Header>
                <Body>
                    <div id='line'></div>
                    {
                        items ? items.map( (e,i) => {
                            return <div key={i}>           
                                <Row onClick={() => showMenu(e.id)}>
                                    <div id='name_mobi'>{`${e.name.substr(0,6)}...`}</div>
                                    <div id='name_tablet'>{`${e.name}`}</div>
                                    <div>{e.stock}</div>
                                    <div>{`R$ ${e.b_price}`}</div>
                                    <div>{`R$ ${e.s_price}`}</div>
                                    <div>{e.category}</div>
                                </Row>
                                {e.id === select ?
                                <ContextMenu>
                                    <div>
                                        <EditButton onClick={() => editItem(e)}><img src={edit_icon}/>Edit</EditButton>
                                        <DeleteButton onClick={() => deleteItem(e)}><img src={delete_icon}/>Delete</DeleteButton>
                                    </div>
                                </ContextMenu>
                                :
                                <></>
                                }
                            </div>
                        })
                        :
                        <div>No items</div>
                    }
                </Body>
            </Container>
            <AddButton onClick={handleOpen}>
                <img src={add_icon}/>
            </AddButton>
        </Wrapper>
    )
}

export default TableCard;
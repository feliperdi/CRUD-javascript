import React from 'react';
import styled from 'styled-components';
import add_icon from '../icons/add.svg';
import delete_icon from '../icons/delete.svg';
import edit_icon from '../icons/edit.svg';
import search_icon from '../icons/search.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 0;
`


const Container = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: #ffffff;
    border-radius: 4px;
    padding-top: 12px;
    font-family: 'Roboto';
    font-weight: lighter;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: start;
    @media(max-width: 360px) {
        height: 420px;
        position: relative;
}`

const Table = styled.table`
    margin: 0;
    min-height: 40%;
    width: 100%;
`
const Thead = styled.thead`

`
const Tbody = styled.tbody`
    width: 100%;
    margin: 0;
`
const Th = styled.th`
    color: #696969;
    font-size: 12px;
`
const Tr = styled.tr`
  
`
const Td = styled.td`
    text-align: center;
    
    @media(max-width: 360px){
        width: fit-content;
        overflow: scroll;
    }
`

const MenuBar = styled.div`
    display: flex;
    margin-top: 32px;
    .button {
        @media(max-width: 360px){
        border-radius: 50%;
        height: 42px;
        width: 42px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        display: flex;
        align-items: center;
        justify-content:center;
        margin-left: 12px;
    }
    }
`
const Icon = styled.img`

`

const TableCard = props => {
    const {items} = props;
    return (
        <Wrapper>
            <Container>
            <Table>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>name</Th>
                        <Th>Stock</Th>
                        <Th>S. Price</Th>
                        <Th>B. Price</Th>
                        <Th>Category</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items.length > 0 && 
                        items.map( (e,i) => {
                            return(
                                <Tr key={i}>
                                    <Td>{e.id}</Td>
                                    <Td>{e.name}</Td>
                                    <Td>{e.stock}</Td>
                                    <Td>{e.b_price}</Td>
                                    <Td>{e.s_price}</Td>
                                    <Td>{e.category}</Td>
                                </Tr>
                    );})}
                </Tbody>
            </Table>
            </Container>
        <MenuBar>
            <div className='button'>
                <Icon src={add_icon}/>
            </div>
            <div className='button'>
                <Icon src={search_icon}/>
            </div>
            <div className='button'>
                <Icon src={edit_icon}/>
            </div>
            <div className='button'>
                <Icon src={delete_icon}/>
            </div>
        </MenuBar>
    </Wrapper>
    )
}

export default TableCard;
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import search_icon from '../icons/search.svg';

const Container = styled.div`
    align-self: center;
    border-bottom: 1px solid #888888;
    margin-top: 64px;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    position: relative;
    img {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    @media(min-width: 768px){
        width: 320px;
    }
    @media(min-width: 1024px){
        width: 411px;
    }
`
const Input = styled.input`
    margin-top: 24px;
    width: 86%;
    font-size: 16px;
    position: absolute;
    right: 0;
    bottom: 1px;
    outline: none;
    border:none;

`
const SearchBar = props => {
    const {handleSearch} = props;
    const ref = useRef();
    const [inputValue, setValue] = useState('');

    const onChange = e => {
        const {value} = e.target;
        setValue(value);
        handleSearch(value);
    };
    
    const focusOnSearch = () => {
        
    };

    return (
       <Container>
           <img onClick={focusOnSearch} src={search_icon}/>
           <Input
                ref={ref}
                value={inputValue}
                onChange={onChange}
           />
       </Container>
    )
}

export default SearchBar;
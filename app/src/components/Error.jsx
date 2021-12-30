import React from 'react';
import styled from 'styled-components';
import apiErrorImg from '../img/505.png';

const Img = styled.img`

`
const Error = props => {
    return(
        <Img alt='Api error' src={apiErrorImg}/>
    )
}

export default Error;
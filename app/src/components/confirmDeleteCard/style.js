import styled, {keyframes} from 'styled-components';

const openAnimation = keyframes`
    0% {
        transform: translate(0, -324px)
    }
    50% {
        transform: translate(0, -120px)
    }
    100% {
        transform: translate(0, 0);
    }
`
export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 1;
    right: 0; 
    top: 0;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
export const Bg = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background: #dedede;
    filter: opacity(25%);
    position: absolute;
    z-index: 1;
`
export const Card = styled.div`
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
    height: 124px;
    width: 264px;
    z-index: 2;
    padding: 24px;
    border-radius: 8px;
    background: #ffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: ${openAnimation} 0.1s;
    animation-timing-function: linear;
    div {
        display: flex;

    }
    button {
        border: none;
        padding: 12px 24px;
        margin: 8px;
        border: 1px solid #60CDFC;
        color: #60CDFC;
        border-radius: 12px;
        &:hover {
            cursor: pointer;
            background: #60CDFC;
            color: #ffffff;
        }
    };
    #confirmButton {
        background: #F97979;
        color: white;
        border: none;
        &:hover {
            cursor: pointer;
        }
    }

`
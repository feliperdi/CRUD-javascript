import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
    0% {
        transform: translate(-324px, 0)
    }
    50% {
        transform: translate(-120px, 0)
    }
    100% {
        transform: translate(0, 0);
    }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    background: none;
    width: 100%;
    height: 100%;
`
export const Card = styled.div`
    margin-top: 24px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background: #ffffff;
    position: absolute;
    z-index: 1;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    animation: ${openAnimation} 0.1s linear;
    .price {
        width: 128px;
        align-self: start;
    }
`
export const BG = styled.div`
   position: absolute;
   background: black;
   filter: opacity(12%);
   height: 100%;
   width: 100%;
`
export const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
        border: none;
        background: none;
        color: #444444;
        height: 32px;
        width: 32px;
    }
`
export const Input = styled.input`
    border: 1px solid #C0C0C0;
    font-size: 18px;
    height: 36px;
    border-radius: 4px;
    padding-left: 12px;
    box-sizing: border-box;

`
export const PriceDiv = styled.div`
    display: flex;
    width: 100%;
    #b_price {
        margin-right: 12px;
    }
    div {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    #categoryInputDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

`

export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    border: 1px solid #C0C0C0;
    border-radius: 8px;
    padding-left: 8px;
    padding-top: 8px;
    box-sizing: border-box;
`
export const Label = styled.label`
    align-self: start;
    margin: 8px 0 4px 0;
    color: #484848;
`
export const Button = styled.button`
    margin: 12px 0 0 0;
    background: ${props => props.disabled ? '#BAE0F0' : '#60CDFC'};
    border:none;
    border-radius: 12px;
    padding: 12px;
    color: #ffffff;
    width: 124px;
    align-self: center;

`
export const Error = styled.div`
    font-size: 14px;
    margin: 2px;
    color: #D8000C;
`
export const LoaderContainer = styled.div`
    display: flex;
    align-self: center;
    z-index: 1;
`
export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 8px;
`
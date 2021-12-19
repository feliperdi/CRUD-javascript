import styled from "styled-components";


export const Wrapper = styled.div`
    background: black;
    background: linear-gradient(180deg, #4f86f7 10%, #ffffff 10%);
    display: flex;
    justify-content: center;
    @media(max-width: 360px) {
        min-height: 640px;
        padding-top: 24px;
        position: relative;
        z-index: 1;
    }
`;

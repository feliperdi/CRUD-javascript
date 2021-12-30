import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    width: 100%;    
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    #create_item {
        display: none;
        border: none;
        padding: 12px 18px;
        border-radius: 4px;
        color: white;
        background: #60CDFC;
        align-self: flex-end;
        margin: 0px 24px 24px 0px;
        &:hover {
            cursor: pointer;
            filter: contrast(85%);
        }
        @media(min-width: 768px){
            display: inline-block;
        }
    };
    @media(min-width: 768px) {
        font-size: 24px;
        width: fit-content;   
    }
    
`
export const Header = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 24px;
    @media(min-width: 375px) {
        align-items: center;
        justify-content: center;   
    }
    
    div {
        width: 68px;
        color: #707070;
        text-align: center;
        @media(min-width: 320px) {
            width: 94px; 
        }
        @media(min-width: 375px) {
            align-items: center;
            justify-content: center;
            width: 128px;   
        }
        @media(min-width: 768px) {
            width: 132px; 
        }
        @media(min-width: 1024px) {
            width: 164px;
            align-items: start;
        }
    }
    div:nth-child(1){
        @media(min-width: 1024px) {
            width: 164px;
            align-items: start;
        }
    }
`
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    #line {
        border-bottom: 1px solid #E0E0E0;
    };
    @media(min-width: 320px) {
            width: 320px; 
    }
    @media(min-width: 375px) {
            width: 375px; 
    }
    @media(min-width: 411px) {
        width: 411px;
    }
    @media(min-width: 425px) {
            width: 425px; 
    }
    @media(min-width: 768px) {
        width: 768px;
        align-self: center;
    }
    @media(min-width: 1024px) {
        width: 1024px;
        align-self: center;
    }
`

export const Row = styled.div`
    display: flex;
    margin: 8px 0;
    border-bottom: 1px solid #E0E0E0;
    justify-content: center;
    
    @media(min-width: 375px) {
        align-items: center;
        justify-content: center;        
    }

    &:hover {
        cursor: pointer;
    }

    div {
        width: 68px;
        height: 34px;
        color: #484848;
        text-align: center;

        @media(min-width: 375px) {
            align-items: center;
            justify-content: center;
            width: 128px;   
        }
        @media(min-width: 768px) {
            width: 142px;
        }
        @media(min-width: 1024px) {
            width: 164px; 
        }
    }

    #name_mobi {
        @media(min-width: 768px) {
            display: none;
        }
    }

    #name_tablet {
        display: none;
        width: 164px;
        text-align: start;
        @media(min-width: 768px) {
            display: inline-block;
        }
    }
`

export const ContextMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    background: #F8F8F8;
    padding: 8px 0;
    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    img {
       width: 18px;
       margin: 2px;
    }
    @media(min-width: 375px) {
        align-items: center;
        justify-content: center;        
    }
`

export const AddButton = styled.button`
    position: absolute;
    display: flex;
    align-items:center;
    justify-content: center;
    right: 42px;
    bottom: 148px;
    border: none;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    &:hover {
        cursor: pointer;
    }
    img {
        width: 32px;
    }
    @media(min-width: 411px) {
        bottom: 272px;
    }
    @media(min-width: 768px) {
        display: none;
    }
`
export const DeleteButton = styled.button`
    margin: 4px 10px 8px 0px;
    border-radius: 4px;
    width: 76px;
    border: none;
    background: #F97979;
    color: #383838;
    display: flex;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media(min-width: 768px) {
        width: 98px;
        height: 32px;
        justify-content: center;
        font-size: 18px;
        margin-right: 24px;
    }
    img {
        @media(min-width: 768px) {
            width: 26px;
            height: 26px;
        }
    }
    @media(min-width: 1024px) {
        width: 94px;
        height: 32px;
        justify-content: center;
        font-size: 16px;
        &:hover {
            cursor: pointer;
        }
    }
    img {
        @media(min-width: 1024px) {
            width: 18px;
            height: 18px;
        }
    }
`
export const EditButton = styled.button`
    margin: 4px 10px 8px 0px;
    width: 76px;
    color: #383838;
    border-radius: 4px;
    border: none;
    background: #ffff;
    display: flex;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media(min-width: 768px) {
        width: 94px;
        height: 32px;
        justify-content: center;
        font-size: 18px;
        margin-right: 24px;
    }
    img {
        @media(min-width: 768px) {
            width: 26px;
            height: 26px;
        }
    }
    @media(min-width: 1024px) {
        width: 94px;
        height: 32px;
        justify-content: center;
        font-size: 16px;
        &:hover {
            cursor: pointer;
        }
    }
    img {
        @media(min-width: 1024px) {
            width: 18px;
            height: 18px;
        }
    }
`

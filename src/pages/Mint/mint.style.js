import styled from "styled-components";


export const MainOut = styled.div`
    min-height: calc((100vh - 80px) - 50px);
`;
export const Main = styled.div`
    padding: 15px 15px 18px;
    border-radius: 20px;
    position: relative;
    max-width:650px;
    width:100%;
    margin: 130px auto 0 auto;
    background-color: rgb(21, 62, 103);
    @media screen and (max-width:680px){
        width: 95% !important;
    }
`;
export const TopTitle = styled.div`
    color: #fff;
    display: flex;
    top: -50px;
    left: 0;
    justify-content: center;
    position: absolute;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    ::before {
    content: "";
    position: absolute;
    width: 115px;
    height: 113px;
    background-image: url('img/mintline.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
    }
`;
export const LikeImg = styled.img`
    width: 115px;
    height: 113px;
`;
export const FTM = styled.div`
    padding:10px 12px 12px;
    border-radius: 15px;
    border: 1px solid rgb(39, 92, 138);
    background-color: rgb(19, 74, 130);
`;
export const XFTM = styled.div`
    padding:10px 12px 12px;
    border-radius: 15px;
    background-color: rgb(20, 57, 94);
`;
export const Topline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
export const Topleft = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: rgb(182, 196, 198);
`;
export const Topright = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: rgb(182, 196, 198);
`;
export const Middleline = styled.div`
    display: flex;
    align-items: center;
`;
export const MintIMG = styled.img`
    border-radius: 30%;
    width: 42px;
    height: 42px;
`;
export const Input = styled.input`
    height: 42px;
    border: none;
    margin-left: 10px;
    width: 100%;
    line-height: 1;
    font-size: 28px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background-color: transparent;
    :hover,:focus{
        outline: none;
    }
`;
export const DownArrow = styled.div`
    width: 100%;
    display:flex;
    margin: 18px 0;
    justify-content: center;
`;
export const ArrowdownImg = styled.img``;
export const Feeline = styled.div`
    margin-top: ${(props) => props.top};
    display: flex;
    justify-content: space-between;
    align-items:center;
`;
export const Feeleft = styled.div`
    font-weight: normal;
    font-size: 16px;
    color: rgb(229, 229, 229);
`;
export const FeeRight = styled.div`
    font-weight: 500;
    color: rgb(255, 255, 255);
    font-size: 16px;
`;
export const ConnectBtn = styled.div`
    width: 100%;
    margin-top: 25px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;   
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(93deg, rgb(48, 9, 221) 0%, rgb(230, 29, 225) 40%, rgb(130, 29, 230) 70%, rgb(130, 29, 230) 102%);
    background-position: -2px 0%;
    background-size: 220% 100%;
    transition: all 0.2s ease-in-out 0s;
    :hover{
        background-position-x: 95%;
    }
`;
export const ProBtn = styled.div`
    display: flex;
    transition: all .3s ease-in-out;
    justify-content: center;
    align-items: center;
    border: ${(props) => props.value ? "1px solid rgb(224, 28, 225)" : "1px solid rgb(55, 107, 130)"};
    border-radius: 10px;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
    width: 60px;
    height: 28px;
    color: #fff;
    background-color: transparent;
    :hover{
        border-color: rgb(224, 28, 225);
    }
    @media screen and (max-width:500px){
        width: 50px !important;
        font-size: 14px !important;
        margin: 0 3px !important;
    }
`;
export const BtnRight = styled.div`
    font-weight: 500;
    color: rgb(255, 255, 255);
    font-size: 16px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    @media screen and (max-width:500px) {
        display: flex !important;
    }
`;
export const CusProBtn = styled.div`
    display: flex;
    border: ${(props) => props.value ? "1px solid rgb(224, 28, 225)" : "1px solid rgb(55, 107, 130)"};
    align-items: center;
    border-radius: 10px;
    transition: all .3s ease-in-out;
    overflow: hidden;
    font-size: 16px;
    :hover{
         border-color: rgb(224, 28, 225);
    }
    @media screen and (max-width:500px){
        font-size: 14px;
    }
`;
export const CusInput = styled.input`
    background-color: transparent;
    width: 54px;
    height: 28px;
    text-align: center;
    border: none;
    :focus,:active{
        outline: none;
    }
     @media screen and (max-width:500px){
        width: 50px;
        height: 24px;
        font-size: 14px;
    }
`;
export const Mark = styled.div`
    font-weight: 500;
    color: rgb(255, 255, 255);
    border-radius: 0px 10px 10px 0px;
    width: 26px;
    border-left: 1px solid rgb(55, 107, 130);
    background-color: rgb(19, 74, 130);
    display:flex;
    justify-content: center;
    align-items: center;
     @media screen and (max-width:500px){
        font-size: 14px;
        width: 24px;
    }
`;

import styled from "styled-components";

export const Header = styled.div`
    width: 100vw;
    height: 80px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: space-between;
    @media screen and (max-width:1420px){
        padding: 0 10px !important;
    }
`;
export const Header_left = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
`;
export const Header_right = styled.div`
    display: flex;
`;
export const Headericon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 10px;
`;
export const Header_pink = styled.div`
    background-color: rgb(28, 28, 40);
    border-radius: 10px;
    color: #fff;
    padding: 7px;
    font-size: 16px;
    margin-right: 15px;
    @media screen and (max-width:1420px){
        display: none !important;
    }
`;
export const Header_tab = styled.span`
    margin: 0 25px;
    cursor: pointer;
    position: relative;
    color: rgb(140, 159, 162);
    :hover {
        color: #fff;
    }
    @media screen and (max-width:1420px){
        display: none !important;
    }
`;
export const HeaderlogoImg = styled.img`
    width: 180px;
    height: 50px;
    margin-top: -10px;
    margin-right: 20px;
    @media screen and (max-width:480px){
        width: 120px !important;
        height: 32.95px !important;
    }
`;
export const ResHeaderlogoImg = styled.img`
    width: 180px;
    height: 50px;
    margin: -10px auto 15px auto ;
    
`;
export const WalletImg = styled.img`
    margin-right: 10px;
`;
export const ConnectBtn = styled.div`
    width: 172px;
    height: 46px;
    border-radius: 10px;
    border: none;
    transition: all 0.2s ease-in-out 0s;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content:center;
    background-image: linear-gradient(93deg, rgb(48, 9, 221) 0%, rgb(230, 29, 225) 40%, rgb(130, 29, 230) 70%, rgb(130, 29, 230) 102%);
    background-position: -2px 0%;
    background-size: 220% 100%;
    transition: all 0.2s ease-in-out 0s;
    :hover{
        background-position-x: 95%;
    }
`;
export const ResConnectBtn = styled.div`
    width: 100%;
    height: 46px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out 0s;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content:center;
    background-image: linear-gradient(93deg, rgb(48, 9, 221) 0%, rgb(230, 29, 225) 40%, rgb(130, 29, 230) 70%, rgb(130, 29, 230) 102%);
    background-position: -2px 0%;
    background-size: 220% 100%;
    transition: all 0.2s ease-in-out 0s;
    :hover{
        background-position-x: 95%;
    }
`;

export const ThreeDot = styled.div`
    width: 46px;
    position: relative;
    height: 46px;
    cursor: pointer;
    border-radius: 10px;
    background: rgb(16, 21, 28);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    :hover{
        background: rgb(6, 29, 64);
    }
    @media screen and (max-width:1420px){
        display: none !important;
    }
`;
export const ThreeDotMenu = styled.div`
    width: 200px;
    overflow: hidden;
    height: ${(props) => props.height + "px"};
    transition: all 0.2s linear 0s;
    box-shadow: rgb(0 0 0 / 19%) 0px 5px 25px 0px;
    background-color: rgba(14, 14, 14, 0.8);
    border-radius: 10px;
    padding: ${(props) => props.height != 0 ? "5px 0 0 0" : "0"};
    position: absolute;
    top: 60px;
    right: 0;
    :hover{
        color:#fff !important;
    }
    @media screen and (max-width:1430px){
        width: 100%;
        z-index: 2;
        background-color: rgb(21,62,103);
    }
`;
export const DotMenuItem = styled.div`
    color: rgb(182, 196, 198);
    font-size: 16px;
    margin-left: 19px;
    padding: 10px 0;
`;
export const Spider = styled.img`
    position: absolute;
    top: 49px;
    transform: translateX(-50%);
    left: 50%;
`;
export const ResPanel = styled.div`
    position: fixed;
    width: 100vw;
    top: 0;
    transition: all .3s ease-in-out;
    left: 0;
    z-index:  ${(props) => props.opa ? -1 : 2};
    opacity: ${(props) => props.opa ? "0" : "1"};
    height: 100vh;
    background-color: rgba(0,0,0,.4);
    @media screen and (min-width:1420px){
        display: none !important;
    }
`;
export const ResBody = styled.div`
    max-width: 80vw;
    width: 100%;
    height: 100vh;
    background-color: rgb(21, 62, 103);
    padding: 20px 20px 40px;
    display: flex;
    z-index: 3;
    position: fixed;
    top: 0;
    left: ${(props) => props.left ? "-80vw" : "0"};
    flex-direction: column;
    align-items: center;
    transition: all .3s ease-in-out;
`;
export const ResItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
    position: relative;
    justify-content: space-between;
`;
export const ResItemLeft = styled.div`
    color: #8c9fa2;
    font-weight: 600;
    font-size: 16px;
`;
export const ResItemRight = styled.div``;
export const ResSpiderImg = styled.img``;
export const ResLine = styled.div`
    margin: 10px 0px 20px;
    width: 100%;
    height: 1px;
    border-top: 1px dashed rgba(255, 255, 255, 0.18);
`;
export const ResTitle = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    width: 100%;
`;
export const PriceItem = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.09);
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
`;
export const PImg = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 10px;
    border-radius: 30%;
`;

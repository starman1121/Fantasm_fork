import styled from "styled-components";

export const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: white;
    width: 100%;
    text-align: center;
    margin-top: 60px;
    @media screen and (max-width:500px){
        font-size: 26px !important;
    }
`;
export const Text = styled.div`
    width: 90%;
    margin: 10px auto 0 auto;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
`;
export const TotalValue = styled.div`
    width: 1030px;
    margin: 47px auto 0 auto;
    height: 100px;
    position: relative;
    border-radius: 20px;
    display: flex;
    font-size: 20px;
    color: #fff;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, rgb(2, 46, 89) 100%, rgba(21, 62, 103, 0.38) 50%, rgba(74, 125, 175, 0.56) 0%);
    @media screen and (max-width:1080px){
        width: 95% !important;
        max-width: 100% !important;
    }
`;
export const RightSpider = styled.img`
    width: 70px;
    height: 97px;
    right: 10px;
    top: 0;
    position: absolute;
`;
export const LeftGhost = styled.img`
    width:145px;
    height: 143px;
    position: absolute;
    left: 14px;
    top: -43px;
`;
export const LockedText = styled.div`
    color:rgb(64, 255, 90);
    font-weight: bold;
    font-size: 42px;
`;
export const ItemsPart = styled.div`
    max-width: 1030px;
    display: grid;
    margin: 25px auto 100px auto;
    grid-template-columns: repeat(2,1fr);
    gap: 25px;
    @media screen and (max-width:1080px){
        width: 95% !important;
        max-width: 100% !important;
        grid-template-columns: 1fr !important;
    }
`;
export const ItemToken = styled.div`
    width: 502.5px;
    height: auto;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
    padding: 18px 22px 22px;
    @media screen and (max-width:1080px){
        width: 100% !important;
    }
`;
export const ItemStaking = styled.div`
    width: 502.5px;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
    padding: 18px 22px 22px;
    @media screen and (max-width:1080px){
        width: 100% !important;
    }
`;
export const ItemXFM = styled.div`
    width: 502.5px;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
    padding: 30px 20px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1080px){
        width: 100% !important;
    }
`;
export const Token = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const TokenLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const TokenRight = styled.div``;
export const TokenImg = styled.img`
    width:52px;
    height:52px;
    border-radius: 15px;
`;
export const RightBottom = styled.div`
    font-size: 14px;
    color: #fff;
    text-align: right;
    margin-top: 4px;
`;
export const RightTop = styled.div`
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    @media screen and (max-width:430px){
        font-size: 14px !important;
    }
`;

export const TokenText = styled.div`
    margin-left: 10px;
`;
export const Ttitle = styled.div`
    font-size: 24px;
    font-weight:bold;
    color: rgb(160, 231, 255);
    @media screen and (max-width:430px){
        font-size: 18px !important;
    }
`;
export const Ttext = styled.div`
    color: rgb(241, 60, 242);
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    :hover{
        text-decoration: underline;
    }
    @media screen and (max-width:430px){
        font-size: 14px !important;
    }
`;
export const GreenColor = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: rgb(64, 255, 90);
    @media screen and (max-width:430px){
        font-size: 14px !important;
    }
`;
export const Middle = styled.div`
    margin-top: 18px;
    padding: 18px;
    border-radius: 20px;
    border: 1px solid rgb(39, 92, 138);
    background-color: rgb(20, 57, 94);
`;
export const Middleline = styled.div`
    color: rgb(229, 229, 229);
    font-size: 16px;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    span{
        white-space: nowrap;
    }
`;
export const MiddlelineTop = styled.div`
     color: rgb(229, 229, 229);
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    span{
        white-space: nowrap;
    }
`;
export const UnderLine = styled.div`
    border: 1px dashed rgba(255, 255, 255, 0.16);
    width: 100%;
    margin: 14px 10px 4px;
`;
export const MetaImg = styled.img`
    margin-left: 5px;
`;
export const MetaBtn = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 24px;
    width: 82.67px;
    height: 42px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    :hover{
        background-color: rgba(255, 255, 255, 0.3);
    }
`;
export const Bottom = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const BuyBtn = styled.div`
    padding: 0 14px;
    height: 42px;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background-image: linear-gradient(93deg, rgb(48, 9, 221) 0%, rgb(230, 29, 225) 40%, rgb(130, 29, 230) 70%, rgb(130, 29, 230) 102%);
    background-position: -2px 0%;
    background-size: 220% 100%;
    transition: all 0.2s ease-in-out 0s;
    :hover{
        background-position-x: 95%;
    }
`;
export const BottomRight = styled.div`
    display: flex;
    align-items: center;
`;
export const MintBtn = styled.div`
    padding: 0px 18px;
    font-size: 14px;
    border-radius: 10px;
    margin-right: 15px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    line-height: 1;
    display: inline-flex;
    position:relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 42px;
    background-image: linear-gradient(93deg, rgb(48, 9, 221) 0%, rgb(230, 29, 225) 40%, rgb(130, 29, 230) 70%, rgb(130, 29, 230) 102%);
    background-position: -2px 0%;
    cursor: pointer;
    z-index:1;
    background-size: 220% 100%;
    transition: all 0.2s ease-in-out 0s;
    :hover{
        background-position-x: 95%;
        ::before{
            opacity: 0;
        }
    }
    ::before{
        content: " ";
        position: absolute;
        inset: 1px;
        border-radius: 10px;
        background-color: rgb(20, 57, 94);
        z-index: -1;
    }
`;
export const Staketop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
`;
export const StakeImg = styled.img`
    width: ${(props) => props.width};
    height: 36px;
    margin-right: 10px;
`;
export const StopLeft = styled.div`
    font-size: 20px;
    font-weight: bolder;
    color: #fff;
`;
export const StopRight = styled.div`
    margin-left: auto;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
    color: rgb(241, 60, 242);
    text-decoration: underline;
    transition: all .3s ease-in-out;
    :hover{
        color: #fff;
    }
`;
export const StakeLine = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: normal;
    color: rgb(255, 255, 255);
`;
export const SlineLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const SlineRight = styled.div``;
export const XFMText = styled.div`
    margin-left: 10px;
`;
export const XFMleft = styled.div`
    display:flex;
    align-items:center;
`;
export const XFMRight = styled.div`
    font-weight: bolder;
    color: rgb(255, 255, 255);
    font-size: 23px;
    @media screen and (max-width:450px){
        font-size: 18px !important;
    }
`;
export const XFMTop = styled.div`
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-size: 16px;
`;
export const XFMBottom = styled.div`
    font-weight: normal;
    color: rgb(229, 229, 229);
    font-size: 13px;
    margin-top: 5px;
    @media screen and (max-width:450px){
        width: 155px !important;
    }
`;
export const XFMImg = styled.img`
    width: 45px;
    height: ${(props) => props.height};
`;
export const Spiderline = styled.img`
    position:absolute;
    right: 0;
    bottom: 0;
    width: 134px;
    height: 80px;
`;
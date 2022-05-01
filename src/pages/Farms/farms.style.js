import styled from "styled-components";


export const Farm = styled.div`
    max-width: 1030px;
    margin: auto;
    width: 100%;
    min-height: calc((100vh - 80px) - 50px);
    padding: 60px 20px 100px;
    @media screen and (max-width:1030px){
        width: 100% !important;
        max-width: 100% !important;
    }
`;
export const Toptitle = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const TopLeft = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    @media screen and (max-width:1030px){
        display: none !important;
    }
`;
export const TopRight = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    @media screen and (max-width:1030px){
        justify-content: space-between !important;
        width: 100% !important;
    }
`;
export const TopImg = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 30%;
    margin: 0 8px 0 6px;
`;
export const AllBtn = styled.div`
    pointer-events: none;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-left: 20px;
    width: ${(props) => props.width};
    height: 36px;
    display: flex;
    font-weight: bolder;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: ${(props) => props.size};
`;
export const TagPart = styled.div`
    padding: 20px;
    cursor: pointer;
    position: relative;
    margin-bottom: 16px;
    color: #fff;
    font-size: 30px;
    overflow: hidden;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
`;
export const TagImg = styled.img`
    border-radius: 30%;
    width: 32px;
    height: 32px;
    margin-right: 2px;
`;
export const First = styled.div`
    display: flex;
    span{
        margin-left: 12px;
        font-size: 16px;
        font-weight: 600;
        color: rgb(255, 255, 255);
    }
`;
export const Second = styled.div`
    @media screen and (max-width:1030px){
        display: none !important;
    }
`;
export const ResSecond = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    @media screen and (max-width:1030px){
        display: flex !important;
    }
`;
export const SecTitle = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: rgb(229, 229, 229);
`;
export const SecValue = styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    @media screen and (max-width:1030px){
        margin-top: 0 !important;
    }
`;
export const HidePart = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media screen and (max-width:1030px){
        width: 100% !important;
        max-width: 100% !important;
        flex-direction: column !important;
    }
`;
export const Onediv = styled.div`
    padding: 16px 20px;
    border-radius: 20px;
    border: 1px solid rgb(39, 92, 138);
    background-color: rgb(20, 57, 94);
    @media screen and (max-width:1030px){
        margin-top: 10px !important;
    }
`;
export const Maintag = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1030px){
        margin-bottom: 20px !important;
    }
`;
export const Onetop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
export const OneLeft = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: rgb(255, 255, 255);
`;
export const OneRight = styled.div`
    font-size: 14px;
    color: rgb(229, 229, 229);
    font-weight: normal;
`;
export const OneInput = styled.input`
    display: flex;
    width: 100%;
    padding: 8px 12px;
    width: 300px;
    border-radius: 8px;
    height: 49px;
    background-color: transparent;
    border-radius: 15px;
    font-size: 20px;
    border: 1px solid rgb(39, 92, 138);
    background-color: rgb(19, 74, 130);
    :focus,:active{
        outline: none;
    }
    @media screen and (max-width:1030px){
        width: 100% !important;
    }
`;
export const DepositBtn = styled.div`
    pointer-events: none;
    background: rgba(255, 255, 255, 0.3);
    font-size: 14px;
    width: 89.66px;
    font-weight: bolder;
    margin: 16px auto 0 auto;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const BtnGrp = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    margin: 0 auto;
`;
export const WithdrawBtn = styled.div`
    pointer-events: none;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 14px;
    width: 127.55px;
    font-weight: bolder;
    margin: 16px auto 0 auto;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const RewardTag = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    height: 49px;
    font-weight: bolder;
    background-color: transparent;
    border-radius: 15px;
    font-size: 16px;
    @media screen and (max-width:1030px){
        justify-content: space-between !important;
    }
`;
export const RewardImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 30%;
    margin-right: 10px;
`;
export const BottomReward = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;
export const BtmLeft = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: rgb(224, 28, 225);
`;
export const BtmRight = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: rgb(224, 28, 225);
`;
export const NonGrp = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    @media screen and (max-width:1030px){
        grid-template-columns: 1fr !important;
    }
`;
export const NonTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    padding-top: 30px;
    padding-bottom: 15px;
`;
export const NonBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
`;
export const NonImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 30%;
`;
export const NonBodyLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const NonBodyRight = styled.div`
    color: rgb(241, 60, 242);
    font-size: 20px;
`;
export const FTMletter = styled.div`
    margin-left: 16px;
`;
export const FTMletterTop = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: rgb(255, 255, 255);
`;
export const FTMletterBottom = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: rgb(229, 229, 229);
    display: flex;
    align-items:center;
`;
export const PanicImg = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 5px;
`;
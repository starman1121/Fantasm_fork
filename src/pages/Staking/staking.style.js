import styled from "styled-components";

export const Staking = styled.div`
    min-height: calc((100vh - 80px) - 50px);
    max-width: 1070px;
    margin: auto;
    padding: 60px 20px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (max-width:1080px){
        width: 100% !important;
        max-width: 100% !important;
        grid-template-columns: 1fr !important;
    }
`;
export const StakingLeft = styled.div`
    max-width: 404px;
    @media screen and (max-width:1080px){
        width: 100% !important;
        max-width: 100% !important;
    }
 `;
export const StakingRight = styled.div`
    width: 606px;
    @media screen and (max-width:1080px){
        width: 100% !important;
        max-width: 100% !important;
    }
 `;
export const LTop = styled.div`
    padding: 0 20px;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
`;
export const LtopItem = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: normal;
    color: rgb(255, 255, 255);
    width: 100%;
    -webkit-box-pack: center;
    justify-content: space-between;
    padding: 20px 0px;
    border-bottom: ${(props) => props.border && "1px solid rgb(39, 92, 138)"};
`;
export const LTopImg = styled.img`
    width: 40px;
    height: 44.64px;
    margin-right: 12px;
`;
export const LtopItemLeft = styled.div`

`;
export const LtopItemRight = styled.div`
    display: flex;
    align-items: center;
    span{
        padding-right: 5px;
        font-size: 20px;
        font-weight: 600;
        color: rgb(255, 255, 255);
    }
`;
export const LMiddle = styled.div`
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
    padding: 10px 20px 20px;
    margin-top: 20px;
`;
export const LMtitle = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`;
export const LMtitleleft = styled.div`
    font-size: 20px;
    color: #fff;
    font-weight: 600;
`;
export const LMtitleRight = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    span{
        font-size: 16px;
        font-weight: 500;
        color: rgb(14, 207, 85);
    }
`;
export const LMtext = styled.div`
    font-size: 14px;
    font-weight: normal;
    line-height: 1.57;
    margin-top: ${(props) => props.mt};
    color: rgb(255, 255, 255);
`;

export const FTM = styled.div`
    max-width: 364px;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid rgb(39, 92, 138);
    background-color: rgb(19, 74, 130);
    @media screen and (max-width:1080px){
        width: 100% !important;
        max-width: 100% !important;
    }
`;

export const Topline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px 5px;
`;
export const Topleft = styled.div`
    font-size: 14px;
    font-weight: bolder;
    color: #fff;
`;
export const Topright = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: rgb(203, 203, 203);
`;

export const Middleline = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 12px;
`;
export const MintIMG = styled.img`
    border-radius: 30%;
    width: 24px;
    height: 24px;
`;
export const Input = styled.input`
    height: 31px;
    border: none;
    margin-left: 10px;
    width: 100%;
    line-height: 1;
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    background-color: transparent;
    :hover,:focus{
        outline: none;
    }
`;

export const ConnectBtn = styled.div`
    width: 94.16px;
    height: 46px;
    margin: 25px auto 0 auto;
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
export const LBottom = styled.div`
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
    padding: 10px 20px 20px;
    margin-top: 20px;
`;
export const RTop = styled.div`
    padding: 15px 20px 0 20px;
    border-radius: 20px;
    background-color: rgb(21, 62, 103);
`;
export const RTopline = styled.div`
    padding-bottom: 15px;
    border-bottom: ${(props) => props.bb && "1px solid rgb(39, 92, 138)"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => props.bb && "15px"};
`;
export const RToplineLeft = styled.div``;
export const RToplineRight = styled.div``;

export const RtopLeftTitle = styled.div`
    font-size: 16px;
    font-weight: normal;
    color: rgb(255, 255, 255);
`;
export const RtopLeftText = styled.div`
    font-weight: normal;
    color: rgb(229, 229, 229);
    margin-top: 6px;
    span{
        color:rgb(255, 84, 84);
    }
`;
export const RToplineRightTop = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: flex-end;
    font-weight: normal;
    color: rgb(255, 255, 255);
`;
export const RToplineRightBottom = styled.div`
    font-size: 14px;
    margin-top: ${(props) => props.mt ? "18px" : "6px"};
    text-align: right;
    font-weight: 600;
    text-decoration: underline;
    color: rgba(255, 255, 255,.3);
`;
export const RToplineRightTopIMG = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 30%;
`;
export const RMiddle = styled.div`
        border-radius: 20px;
    background-color: rgb(21, 62, 103);
    padding: 15px 20px;
    margin-top: 20px;
`;
export const NoVest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: normal;
    color: rgb(255, 255, 255);
    padding: 18px;
    border-radius: 20px;
    border: 1px solid rgb(39, 92, 138);
    background-color: rgb(20, 57, 94);
`;
export const NoVestImg = styled.img`
    width: 40px;
    height: 48.77px;
    margin-bottom: 12px;
`;

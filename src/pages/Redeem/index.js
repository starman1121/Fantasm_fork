import React, { useState } from "react";
import { Main, MainOut, ConnectBtn, CusInput, CusProBtn, Mark, BtnRight, ProBtn, DownArrow, Feeline, Feeleft, FeeRight, ArrowdownImg, FTM, Middleline, Input, MintIMG, Topline, Topleft, Topright, XFTM, TopTitle } from "./redeem.style";

export default function RedeemContainer() {
    const [slipVal, setSlipVal] = useState(0.5);
    const ChangValue = (e) => {
        setSlipVal(e)
    }
    const ChangeProValue = (e) => {
        if (e.target.value < 100)
            setSlipVal(e.target.value);
    }
    return (
        <MainOut>
            <Main>
                <TopTitle>
                    <span>REDEEM</span>
                </TopTitle>
                <FTM>
                    <Topline>
                        <Topleft>XFTM</Topleft>
                        <Topright>Balance: -XFTM</Topright>
                    </Topline>
                    <Middleline>
                        <MintIMG src='img/XFTM.df5dd5d99aa13e9a2819.png' alt='' />
                        <Input type='number' placeholder="0.0" />
                    </Middleline>
                </FTM>
                <DownArrow>
                    <ArrowdownImg src='img/arrowdown.svg' alt='' />
                </DownArrow>
                <XFTM>
                    <Topline>
                        <Topleft>FTM - 100%</Topleft>
                        <Topright>Balance: -FTM</Topright>
                    </Topline>
                    <Middleline>
                        <MintIMG src='img/bluetower.png' alt='' />
                        <Input type='number' placeholder="0.0" readOnly />
                    </Middleline>
                </XFTM>
                <Feeline top='25px'>
                    <Feeleft>Redeem Fee</Feeleft>
                    <FeeRight>0.5%</FeeRight>
                </Feeline>
                <Feeline top='12px'>
                    <Feeleft>Pool Balance</Feeleft>
                    <FeeRight>0 FTM</FeeRight>
                </Feeline>
                <Feeline top='12px'>
                    <Feeleft>Minimum Received</Feeleft>
                    <FeeRight>0 FTM</FeeRight>
                </Feeline>
                <Feeline top='12px'>
                    <Feeleft>Slippage</Feeleft>
                    <BtnRight>
                        <ProBtn value={slipVal == 0.5 && true} onClick={() => ChangValue(0.5)}>0.5%</ProBtn>
                        <ProBtn value={slipVal == 1 && true} onClick={() => ChangValue(1)}>1%</ProBtn>
                        <ProBtn value={slipVal == 2 && true} onClick={() => ChangValue(2)}>2%</ProBtn>
                        <CusProBtn
                            value={(slipVal != 0.5 && slipVal != 1 && slipVal != 2) && true}
                        >
                            {/* onClick={() => ChangValue(0.5)} */}
                            <CusInput type='number' value={slipVal} onChange={(e) => ChangeProValue(e)} />
                            <Mark>%</Mark>
                        </CusProBtn>
                    </BtnRight>
                </Feeline>
                <ConnectBtn>Connect wallet</ConnectBtn>
            </Main>
        </MainOut>
    )
}

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Title, Text, XFMText, Spiderline, XFMleft, XFMRight, XFMTop, XFMBottom, XFMImg, StakeLine, SlineLeft, SlineRight, Staketop, StakeImg, StopLeft, StopRight, BuyBtn, MintBtn, Token, UnderLine, BottomRight, Middle, Bottom, MetaBtn, MetaImg, MiddlelineTop, Middleline, TokenText, GreenColor, Ttitle, Ttext, RightTop, RightBottom, TokenLeft, TokenImg, TokenRight, ItemXFM, ItemsPart, ItemStaking, ItemToken, TotalValue, RightSpider, LockedText, LeftGhost } from "./dashboard.style";

export default function DashboardContainer() {
    return (
        <>
            <Title>Welcome to Fantasm</Title>
            <Text>Fractional-Algorithmic Synthetic Token pegged to the value of 1 FTM on Fantom Opera</Text>
            {/* <TotalValue>
                <LeftGhost src='img/bg-tvl-left.7449613aab9e63ff22be.png' alt='' />
                <RightSpider src='img/pinkspider.png' alt='' />

                Total Value Locked&nbsp;&nbsp;<LockedText>$889,728</LockedText>
            </TotalValue> */}
            <ItemsPart>
                <ItemToken>
                    <Token>
                        <TokenLeft>
                            <TokenImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                            <TokenText>
                                <Ttitle>FSM</Ttitle>
                                <Ttext>View contract&nbsp;<HiOutlineExternalLink /></Ttext>
                            </TokenText>
                        </TokenLeft>
                        <TokenRight>
                            <RightTop>Price:&nbsp;<GreenColor>3.6725854 FTM</GreenColor></RightTop>
                            <RightBottom>$5.035915</RightBottom>
                        </TokenRight>
                    </Token>
                    <Middle>
                        <MiddlelineTop>
                            <span>Circulating supply</span>
                            <UnderLine />
                            <span>168,020</span>
                        </MiddlelineTop>
                        <Middleline>
                            <span>Market Cap</span>
                            <UnderLine />
                            <span>$1,090,755</span>
                        </Middleline>
                    </Middle>
                    <Bottom>
                        <MetaBtn>
                            + <MetaImg src='img/metamask.png' alt='' />
                        </MetaBtn>
                        <BuyBtn>BUY FSM</BuyBtn>
                    </Bottom>
                </ItemToken>
                <ItemToken>
                    <Token>
                        <TokenLeft>
                            <TokenImg src='img/XFTM.df5dd5d99aa13e9a2819.png' alt='' />
                            <TokenText>
                                <Ttitle>XFTM</Ttitle>
                                <Ttext>View contract&nbsp;<HiOutlineExternalLink /></Ttext>
                            </TokenText>
                        </TokenLeft>
                        <TokenRight>
                            <RightTop>Price:&nbsp;<GreenColor>3.6725854 FTM</GreenColor></RightTop>
                            <RightBottom>$5.035915</RightBottom>
                        </TokenRight>
                    </Token>
                    <Middle>
                        <MiddlelineTop>
                            <span>Circulating supply</span>
                            <UnderLine />
                            <span>168,020</span>
                        </MiddlelineTop>
                        <Middleline>
                            <span>Market Cap</span>
                            <UnderLine />
                            <span>$1,090,755</span>
                        </Middleline>
                    </Middle>
                    <Bottom>
                        <MetaBtn>
                            + <MetaImg src='img/metamask.png' alt='' />
                        </MetaBtn>
                        <BottomRight>
                            <MintBtn>MINT</MintBtn>
                            <BuyBtn>BUY XFTM</BuyBtn>
                        </BottomRight>
                    </Bottom>
                </ItemToken>
                <ItemStaking>
                    <Staketop>
                        <StopLeft>
                            <StakeImg src='img/pinkcircle.png' width="22px" alt='' />
                            STAKING
                        </StopLeft>
                        <StopRight>GO TO STAKING</StopRight>
                    </Staketop>
                    <StakeLine>
                        <SlineLeft>Staking APR</SlineLeft>
                        <SlineRight>0%</SlineRight>
                    </StakeLine>
                    <StakeLine>
                        <SlineLeft>Lock APR</SlineLeft>
                        <SlineRight>4,666%</SlineRight>
                    </StakeLine>
                </ItemStaking>
                <ItemStaking>
                    <Staketop>
                        <StopLeft>
                            <StakeImg src='img/pip.png' width="28px" alt='' />
                            FARM
                        </StopLeft>
                        <StopRight>GO TO FARMS</StopRight>
                    </Staketop>
                    <StakeLine>
                        <SlineLeft>FSM/FTM</SlineLeft>
                        <SlineRight>APR:&nbsp;6,546%</SlineRight>
                    </StakeLine>
                    <StakeLine>
                        <SlineLeft>FSM/XFTM</SlineLeft>
                        <SlineRight>APR:&nbsp;22,088%</SlineRight>
                    </StakeLine>
                    <StakeLine>
                        <SlineLeft>XFTM/FTM</SlineLeft>
                        <SlineRight>APR:&nbsp;10,872%</SlineRight>
                    </StakeLine>
                </ItemStaking>
                <ItemXFM>
                    <XFMleft>
                        <XFMImg src='img/blueghost.png' height="47.81px" alt='' />
                        <XFMText>
                            <XFMTop>COLLATERAL RATIO</XFMTop>
                            <XFMBottom>Last update: 10/03/2022 04:22:27 GMT+9</XFMBottom>
                        </XFMText>
                    </XFMleft>
                    <XFMRight>99.1%</XFMRight>
                </ItemXFM>
                <ItemXFM>
                    <Spiderline src="img/spiderline.png" alt='' />
                    <XFMleft>
                        <XFMImg src='img/box.png' height="55.38px" alt='' />
                        <XFMText>
                            <XFMTop>XFTM60-MINTWAP</XFMTop>
                            <XFMBottom>Last update: 10/03/2022 04:23:27 GMT+9</XFMBottom>
                        </XFMText>
                    </XFMleft>
                    <XFMRight>0.015&nbsp;FTM</XFMRight>
                </ItemXFM>
            </ItemsPart>
        </>
    )
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiFillGithub, AiOutlineMedium, AiOutlineTwitter } from "react-icons/ai";
import { HiBookOpen } from "react-icons/hi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Header, Header_left, ResConnectBtn, PriceItem, PImg, ResTitle, ResLine, ResSpiderImg, ResItem, ResItemLeft, ResItemRight, ResHeaderlogoImg, Spider, ResBody, ResPanel, DotMenuItem, ThreeDotMenu, ThreeDot, ConnectBtn, WalletImg, Header_right, Headericon, Header_pink, Header_tab, HeaderlogoImg } from "./header.style";

export default function HeaderContainer() {
    const [dotmenuHeight, setDotheight] = useState(0);
    const [spider, setspider] = useState(0);
    const [resflag, setResflag] = useState(true);
    const ChangeDotHeight = () => {
        setDotheight(dotmenuHeight == 0 ? 285 : 0);
    }
    const ChangeSpiderposition = (positionNum) => {
        setspider(positionNum);
    }
    const StateResbar = () => {
        setResflag(!resflag);
    }
    return (
        <>
            <ResPanel onClick={() => StateResbar()} opa={resflag} />
            <ResBody left={resflag}>
                <Link to={'/'}>
                    <ResHeaderlogoImg src="img/logo.png" alt="" />
                </Link>
                <ResConnectBtn>
                    <WalletImg src='img/walletBtnimg.svg' /> Connect wallet
                </ResConnectBtn>
                <Link to={'/'} className="resclass" onClick={() => ChangeSpiderposition(0)}>
                    <ResItem>
                        <ResItemLeft>Dashboard</ResItemLeft>
                        <ResItemRight>
                            {spider == 0 && <ResSpiderImg src='img/resspider.svg' alt='' />}
                        </ResItemRight>
                    </ResItem>
                </Link>
                <Link to={'/mint'} className="resclass" onClick={() => ChangeSpiderposition(1)}>
                    <ResItem>
                        <ResItemLeft>Mint</ResItemLeft>
                        <ResItemRight>
                            {spider == 1 && <ResSpiderImg src='img/resspider.svg' alt='' />}
                        </ResItemRight>
                    </ResItem>
                </Link>
                <Link to={'/redeem'} className="resclass" onClick={() => ChangeSpiderposition(2)}>
                    <ResItem>
                        <ResItemLeft>Redeem</ResItemLeft>
                        <ResItemRight>
                            {spider == 2 && <ResSpiderImg src='img/resspider.svg' alt='' />}
                        </ResItemRight>
                    </ResItem>
                </Link>
                <Link to={'/farms'} className="resclass" onClick={() => ChangeSpiderposition(3)}>
                    <ResItem>
                        <ResItemLeft>Farms</ResItemLeft>
                        <ResItemRight>
                            {spider == 3 && <ResSpiderImg src='img/resspider.svg' alt='' />}
                        </ResItemRight>
                    </ResItem>
                </Link>
                <Link to={'/staking'} className="resclass" onClick={() => ChangeSpiderposition(4)}>
                    <ResItem>
                        <ResItemLeft>Staking</ResItemLeft>
                        <ResItemRight>
                            {spider == 4 && <ResSpiderImg src='img/resspider.svg' alt='' />}
                        </ResItemRight>
                    </ResItem>
                </Link>
                <ResItem>
                    <ResItemLeft onClick={() => ChangeDotHeight()}>More</ResItemLeft>
                    <ResItemRight />
                    <ThreeDotMenu height={dotmenuHeight}>
                        <DotMenuItem>
                            <HiBookOpen className="dotmenuitem" />Documentations
                        </DotMenuItem>
                        <DotMenuItem>
                            <AiFillGithub className="dotmenuitem" />Github
                        </DotMenuItem>
                        <DotMenuItem>
                            <AiOutlineMedium className="dotmenuitem" />Medium
                        </DotMenuItem>
                        <DotMenuItem>
                            <AiOutlineTwitter className="dotmenuitem" />Twitter
                        </DotMenuItem>
                        <DotMenuItem>
                            <FaTelegramPlane className="dotmenuitem" />Telegram
                        </DotMenuItem>
                        <DotMenuItem>
                            <FaDiscord className="dotmenuitem" />Discord
                        </DotMenuItem>
                    </ThreeDotMenu>
                </ResItem>
                <ResLine />
                <ResTitle>
                    TOKEN PRICE
                </ResTitle>
                <PriceItem>
                    <PImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' /> $1.694995
                </PriceItem>
                <PriceItem>
                    <PImg src='img/XFTM.df5dd5d99aa13e9a2819.png' alt='' /> 0.000732 FTM
                </PriceItem>
                <PriceItem>
                    <PImg src='img/bluetower.png' alt='' /> $1.2303
                </PriceItem>
            </ResBody>
            <Header>
                <Header_left>
                    <RiBarChartHorizontalFill className="resbar" onClick={() => StateResbar()} />
                    <Link to={'/'}>
                        <HeaderlogoImg src="img/logo.png" alt="" />
                    </Link>
                    <Link to={'/'} onClick={() => ChangeSpiderposition(0)}>
                        <Header_tab>
                            <span style={{ color: spider == 0 && "#fff" }}>Dashboard</span>
                            {spider == 0 && <Spider src='img/spider.svg' />}
                        </Header_tab>
                    </Link>
                    <Link to={'/mint'} onClick={() => ChangeSpiderposition(1)}>
                        <Header_tab>
                            <span style={{ color: spider == 1 && "#fff" }}>Mint</span>
                            {spider == 1 && <Spider src='img/spider.svg' />}
                        </Header_tab>
                    </Link>
                    <Link to={'/redeem'} onClick={() => ChangeSpiderposition(2)}>
                        <Header_tab>
                            <span style={{ color: spider == 2 && "#fff" }}>Redeem</span>
                            {spider == 2 && <Spider src='img/spider.svg' />}
                        </Header_tab>
                    </Link>
                    <Link to={'/farms'} onClick={() => ChangeSpiderposition(3)}>
                        <Header_tab>
                            <span style={{ color: spider == 3 && "#fff" }}>Farms</span>
                            {spider == 3 && <Spider src='img/spider.svg' />}
                        </Header_tab>
                    </Link>
                    <Link to={'/staking'} onClick={() => ChangeSpiderposition(4)}>
                        <Header_tab>
                            <span style={{ color: spider == 4 && "#fff" }}>Staking</span>
                            {spider == 4 && <Spider src='img/spider.svg' />}
                        </Header_tab>
                    </Link>
                </Header_left>
                <Header_right>
                    <Header_pink>
                        <Headericon src="img/FSM.26a08c9ac39524cc989b.png" alt='' /> $12.055
                    </Header_pink>
                    <Header_pink>
                        <Headericon src="img/XFTM.df5dd5d99aa13e9a2819.png" alt='' /> 0.995 FTM
                    </Header_pink>
                    <Header_pink>
                        <Headericon src="img/bluetower.png" alt='' /> $1.387
                    </Header_pink>
                    <ConnectBtn>
                        <WalletImg src='img/walletBtnimg.svg' /> Connect wallet
                    </ConnectBtn>
                    <ThreeDot>
                        <BsThreeDots className="threedot" onClick={() => ChangeDotHeight()} />
                        <ThreeDotMenu height={dotmenuHeight}>
                            <DotMenuItem>
                                <HiBookOpen className="dotmenuitem" />Documentations
                            </DotMenuItem>
                            <DotMenuItem>
                                <AiFillGithub className="dotmenuitem" />Github
                            </DotMenuItem>
                            <DotMenuItem>
                                <AiOutlineMedium className="dotmenuitem" />Medium
                            </DotMenuItem>
                            <DotMenuItem>
                                <AiOutlineTwitter className="dotmenuitem" />Twitter
                            </DotMenuItem>
                            <DotMenuItem>
                                <FaTelegramPlane className="dotmenuitem" />Telegram
                            </DotMenuItem>
                            <DotMenuItem>
                                <FaDiscord className="dotmenuitem" />Discord
                            </DotMenuItem>
                        </ThreeDotMenu>
                    </ThreeDot>
                </Header_right>
            </Header>
        </>
    )
}

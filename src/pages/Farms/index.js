import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Toptitle, RewardTag, ResSecond, NonImg, PanicImg, NonBodyLeft, FTMletter, FTMletterTop, FTMletterBottom, NonBodyRight, NonBody, NonGrp, NonTitle, BottomReward, BtmLeft, BtmRight, RewardImg, First, BtnGrp, WithdrawBtn, Maintag, DepositBtn, OneInput, HidePart, Onediv, Onetop, OneLeft, OneRight, Second, SecTitle, SecValue, TagPart, TagImg, Farm, TopLeft, TopRight, TopImg, AllBtn } from "./farms.style";

export default function FarmsContainer() {
    const [flag, setFlag] = useState(1);
    const [openflag, setOpenflag] = useState(false);
    const ChangeOpenflag = () => {
        setOpenflag(!openflag);
    }
    const ChangeFlag = (e) => {
        if (e == flag)
            ChangeOpenflag();
        else {
            setFlag(e);
            setOpenflag(true);
        }
    }
    return (
        <Farm>
            <Toptitle>
                <TopLeft>FARMS</TopLeft>
                <TopRight>
                    <span>
                        Rewards:
                        <TopImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                        0 FSM
                    </span>
                    <AllBtn size="12px" width="91.73px">Claim All</AllBtn>
                </TopRight>
            </Toptitle>
            <TagPart >
                <Maintag>
                    <First>
                        <TagImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                        <TagImg src='img/bluetower.png' alt='' />
                        <span>FSM/FTM</span>
                    </First>
                    <Second>
                        <SecTitle>Earn</SecTitle>
                        <SecValue>4,986 FSM per day</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>TVL</SecTitle>
                        <SecValue>$152,744</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>Deposited</SecTitle>
                        <SecValue>-</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>APR</SecTitle>
                        <SecValue>6,911%</SecValue>
                    </Second>
                    {(openflag && flag == 1) ? <MdKeyboardArrowDown onClick={() => {
                        ChangeFlag(1);
                    }} /> : <MdKeyboardArrowUp onClick={() => {
                        ChangeFlag(1);
                    }} />}
                </Maintag>
                <ResSecond>
                    <SecTitle>Earn</SecTitle>
                    <SecValue>4,986 FSM per day</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>TVL</SecTitle>
                    <SecValue>$152,744</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>Deposited</SecTitle>
                    <SecValue>-</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>APR</SecTitle>
                    <SecValue>6,911%</SecValue>
                </ResSecond>
                {(openflag && flag == 1) && <HidePart>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Deposit</OneLeft>
                            <OneRight>Balance: -</OneRight>
                        </Onetop>
                        <OneInput type='number' placeholder="0.0" />
                        <DepositBtn>Deposit</DepositBtn>
                    </Onediv>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Withdraw</OneLeft>
                            <OneRight>Deposited: -</OneRight>
                        </Onetop>
                        <OneInput type='number' placeholder="0.0" />
                        <BtnGrp>
                            <WithdrawBtn>Withdraw all</WithdrawBtn>
                            <DepositBtn>Deposit</DepositBtn>
                        </BtnGrp>
                    </Onediv>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Reward</OneLeft>
                            <OneRight></OneRight>
                        </Onetop>
                        <RewardTag>
                            <span>
                                <RewardImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                                - FSM
                            </span>
                            <AllBtn size="14px" width="78.53px">Claim</AllBtn>
                        </RewardTag>
                        <BottomReward>
                            <BtmLeft>Add LP</BtmLeft>
                            <BtmRight>Remove LP</BtmRight>
                        </BottomReward>
                    </Onediv>
                </HidePart>}
            </TagPart>
            <TagPart>
                <Maintag>
                    <First>
                        <TagImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                        <TagImg src='img/XFTM.df5dd5d99aa13e9a2819.png' alt='' />
                        <span>FSM/XFTM</span>
                    </First>
                    <Second>
                        <SecTitle>Earn</SecTitle>
                        <SecValue>4,986 FSM per day</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>TVL</SecTitle>
                        <SecValue>$152,744</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>Deposited</SecTitle>
                        <SecValue>-</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>APR</SecTitle>
                        <SecValue>6,911%</SecValue>
                    </Second>
                    {(openflag && flag == 2) ? <MdKeyboardArrowDown onClick={() => {
                        ChangeFlag(2);
                    }} /> : <MdKeyboardArrowUp onClick={() => {
                        ChangeFlag(2);
                    }} />}
                </Maintag>
                <ResSecond>
                    <SecTitle>Earn</SecTitle>
                    <SecValue>4,986 FSM per day</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>TVL</SecTitle>
                    <SecValue>$152,744</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>Deposited</SecTitle>
                    <SecValue>-</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>APR</SecTitle>
                    <SecValue>6,911%</SecValue>
                </ResSecond>
                {(openflag && flag == 2) && <HidePart>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Deposit</OneLeft>
                            <OneRight>Balance: -</OneRight>
                        </Onetop>
                        <OneInput type='number' placeholder="0.0" />
                        <DepositBtn>Deposit</DepositBtn>
                    </Onediv>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Withdraw</OneLeft>
                            <OneRight>Deposited: -</OneRight>
                        </Onetop>
                        <OneInput type='number' placeholder="0.0" />
                        <BtnGrp>
                            <WithdrawBtn>Withdraw all</WithdrawBtn>
                            <DepositBtn>Deposit</DepositBtn>
                        </BtnGrp>
                    </Onediv>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Reward</OneLeft>
                            <OneRight></OneRight>
                        </Onetop>
                        <RewardTag>
                            <RewardImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                            - FSM
                            <AllBtn size="14px" width="78.53px">Claim</AllBtn>
                        </RewardTag>
                        <BottomReward>
                            <BtmLeft>Add LP</BtmLeft>
                            <BtmRight>Remove LP</BtmRight>
                        </BottomReward>
                    </Onediv>
                </HidePart>}
            </TagPart>
            <TagPart>
                <Maintag>
                    <First>
                        <TagImg src='img/XFTM.df5dd5d99aa13e9a2819.png' alt='' />
                        <TagImg src='img/bluetower.png' alt='' />
                        <span>XFTM/FTM</span>
                    </First>
                    <Second>
                        <SecTitle>Earn</SecTitle>
                        <SecValue>4,986 FSM per day</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>TVL</SecTitle>
                        <SecValue>$152,744</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>Deposited</SecTitle>
                        <SecValue>-</SecValue>
                    </Second>
                    <Second>
                        <SecTitle>APR</SecTitle>
                        <SecValue>6,911%</SecValue>
                    </Second>
                    {(openflag && flag == 3) ? <MdKeyboardArrowDown onClick={() => {
                        ChangeFlag(3);
                    }} /> : <MdKeyboardArrowUp onClick={() => {
                        ChangeFlag(3);
                    }} />}
                </Maintag>
                <ResSecond>
                    <SecTitle>Earn</SecTitle>
                    <SecValue>4,986 FSM per day</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>TVL</SecTitle>
                    <SecValue>$152,744</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>Deposited</SecTitle>
                    <SecValue>-</SecValue>
                </ResSecond>
                <ResSecond>
                    <SecTitle>APR</SecTitle>
                    <SecValue>6,911%</SecValue>
                </ResSecond>
                {(openflag && flag == 3) && <HidePart>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Deposit</OneLeft>
                            <OneRight>Balance: -</OneRight>
                        </Onetop>
                        <OneInput type='number' placeholder="0.0" />
                        <DepositBtn>Deposit</DepositBtn>
                    </Onediv>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Withdraw</OneLeft>
                            <OneRight>Deposited: -</OneRight>
                        </Onetop>
                        <OneInput type='number' placeholder="0.0" />
                        <BtnGrp>
                            <WithdrawBtn>Withdraw all</WithdrawBtn>
                            <DepositBtn>Deposit</DepositBtn>
                        </BtnGrp>
                    </Onediv>
                    <Onediv>
                        <Onetop>
                            <OneLeft>Reward</OneLeft>
                            <OneRight></OneRight>
                        </Onetop>
                        <RewardTag>
                            <RewardImg src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                            - FSM
                            <AllBtn size="14px" width="78.53px">Claim</AllBtn>
                        </RewardTag>
                        <BottomReward>
                            <BtmLeft>Add LP</BtmLeft>
                            <BtmRight>Remove LP</BtmRight>
                        </BottomReward>
                    </Onediv>
                </HidePart>}
            </TagPart>
            <NonTitle>NON-OFFICIAL FARMS</NonTitle>
            <NonGrp>
                <NonBody>
                    <NonBodyLeft>
                        <NonImg src='img/bluetower.png' alt='' />
                        <NonImg src='img/XFTM.df5dd5d99aa13e9a2819.png' alt='' />
                        <FTMletter>
                            <FTMletterTop>FTM/XFTM</FTMletterTop>
                            <FTMletterBottom>
                                <PanicImg src='img/panicswap.png' alt='' />PanicSwap
                            </FTMletterBottom>
                        </FTMletter>
                    </NonBodyLeft>
                    <NonBodyRight>
                        <HiOutlineExternalLink />
                    </NonBodyRight>
                </NonBody>
            </NonGrp>
        </Farm>
    )
}

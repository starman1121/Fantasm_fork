import React from "react";
import { Staking, StakingLeft, ConnectBtn, LBottom, FTM, Middleline, Topleft, Topline, MintIMG, Input, Topright, LMiddle, LMtext, LMtitle, LMtitleleft, LMtitleRight, LtopItem, StakingRight, LTop, LTopImg, LtopItemLeft, LtopItemRight, RTop, RTopline, RToplineLeft, RToplineRight, RtopLeftTitle, RtopLeftText, RToplineRightTop, RToplineRightBottom, RToplineRightTopIMG, RMiddle, NoVest, NoVestImg } from "./staking.style";

export default function StakingContainer() {

    return (
        <Staking>
            <StakingLeft>
                <LTop>
                    <LtopItem border={true}>
                        <LtopItemLeft>
                            <LTopImg src='img/boilghost.png' alt='' />
                            Total FSM Staked
                        </LtopItemLeft>
                        <LtopItemRight>
                            <span>14,513</span>FSM
                        </LtopItemRight>
                    </LtopItem>
                    <LtopItem border={true}>
                        <LtopItemLeft>
                            <LTopImg src='img/lockghost.png' alt='' />
                            Total FSM Locked
                        </LtopItemLeft>
                        <LtopItemRight>
                            <span>14,513</span>FSM
                        </LtopItemRight>
                    </LtopItem>
                    <LtopItem border={false}>
                        <LtopItemLeft>
                            <LTopImg src='img/plusghost.png' alt='' />
                            Accumulated Fees
                        </LtopItemLeft>
                        <LtopItemRight>
                            <span>14,513</span>FTM
                        </LtopItemRight>
                    </LtopItem>
                </LTop>
                <LMiddle>
                    <LMtitle>
                        <LMtitleleft>STAKE FSM</LMtitleleft>
                        <LMtitleRight>APR:&nbsp;<span>0%</span></LMtitleRight>
                    </LMtitle>
                    <LMtext>
                        Stake FSM and earn platform fees with no lockup period.
                    </LMtext>
                    <FTM>
                        <Topline>
                            <Topleft>Amount</Topleft>
                            <Topright>Wallet Balance: &nbsp;-FSM</Topright>
                        </Topline>
                        <Middleline>
                            <MintIMG src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                            <Input type='number' placeholder="0.0" />
                        </Middleline>
                    </FTM>
                    <ConnectBtn>Connect</ConnectBtn>
                </LMiddle>
                <LBottom>
                    <LMtitle>
                        <LMtitleleft>LOCK FSM</LMtitleleft>
                        <LMtitleRight>APR:&nbsp;<span>4,127%</span></LMtitleRight>
                    </LMtitle>
                    <LMtext>
                        Lock FSM and earn platform fees and penalty fees in unlocked FSM
                    </LMtext>
                    <LMtext mt="12px">
                        The lock data are grouped by the week. Any lock between Thursday 00:00 UTC to Wednesday 23:59 UTC are grouped in the same week group, and will release at the same time eight (8) weeks later.
                    </LMtext>
                    <LMtext mt="12px">
                        Locked FSM will continue to earn fees after the locks expire if you do not withdraw.
                    </LMtext>
                    <FTM>
                        <Topline>
                            <Topleft>Amount</Topleft>
                            <Topright>Wallet Balance: &nbsp;-FSM</Topright>
                        </Topline>
                        <Middleline>
                            <MintIMG src='img/FSM.26a08c9ac39524cc989b.png' alt='' />
                            <Input type='number' placeholder="0.0" />
                        </Middleline>
                    </FTM>
                    <ConnectBtn>Connect</ConnectBtn>
                </LBottom>
            </StakingLeft>
            <StakingRight>
                <RTop>
                    <RTopline bb={true}>
                        <RToplineLeft>
                            <RtopLeftTitle>Claimable FSM</RtopLeftTitle>
                            <RtopLeftText>Include staked FSM and vested FSM</RtopLeftText>
                        </RToplineLeft>
                        <RToplineRight>
                            <RToplineRightTop>
                                <RToplineRightTopIMG src='img/FSM.26a08c9ac39524cc989b.png' alt='' />&nbsp;-&nbsp;FSM
                            </RToplineRightTop>
                            <RToplineRightBottom>Claim</RToplineRightBottom>
                        </RToplineRight>
                    </RTopline>
                    <RTopline bb={true}>
                        <RToplineLeft>
                            <RtopLeftTitle>FSM in Vesting</RtopLeftTitle>
                            <RtopLeftText>FSM amount that can be claimed with a <span>50% penalty</span></RtopLeftText>
                        </RToplineLeft>
                        <RToplineRight>
                            <RToplineRightTop>
                                <RToplineRightTopIMG src='img/FSM.26a08c9ac39524cc989b.png' alt='' />&nbsp;-&nbsp;FSM
                            </RToplineRightTop>
                        </RToplineRight>
                    </RTopline>
                    <RTopline bb={true}>
                        <RToplineLeft>
                            <RtopLeftTitle>Claimable all FSM above</RtopLeftTitle>
                            <RtopLeftText>Early Exit Penalty</RtopLeftText>
                        </RToplineLeft>
                        <RToplineRight>
                            <RToplineRightTop>
                                <RToplineRightTopIMG src='img/FSM.26a08c9ac39524cc989b.png' alt='' />&nbsp;-&nbsp;FSM
                            </RToplineRightTop>
                            <RToplineRightBottom>Claim with penalty</RToplineRightBottom>
                        </RToplineRight>
                    </RTopline>
                    <RTopline>
                        <RToplineLeft>
                            <RtopLeftTitle>Expired Locked FSM</RtopLeftTitle>
                        </RToplineLeft>
                        <RToplineRight>
                            <RToplineRightTop>
                                <RToplineRightTopIMG src='img/FSM.26a08c9ac39524cc989b.png' alt='' />&nbsp;-&nbsp;FSM
                            </RToplineRightTop>
                            <RToplineRightBottom>Withdraw</RToplineRightBottom>
                        </RToplineRight>
                    </RTopline>
                </RTop>
                <RMiddle>
                    <LMtitle>
                        <LMtitleleft>FSM Vests</LMtitleleft>
                        <LMtitleRight>Total:&nbsp;-&nbsp;FSM</LMtitleRight>
                    </LMtitle>
                    <NoVest>
                        <NoVestImg src='img/emptyghost.svg' alt='' />
                        No vesting found
                    </NoVest>
                </RMiddle>
                <RMiddle>
                    <LMtitle>
                        <LMtitleleft>FSM Vests</LMtitleleft>
                        <LMtitleRight>Total:&nbsp;-&nbsp;FSM</LMtitleRight>
                    </LMtitle>
                    <NoVest>
                        <NoVestImg src='img/emptyghost.svg' alt='' />
                        No vesting found
                    </NoVest>
                </RMiddle>
                <RMiddle>
                    <LMtitle>
                        <LMtitleleft>FSM Vests</LMtitleleft>
                        <LMtitleRight>Total:&nbsp;-&nbsp;FSM</LMtitleRight>
                    </LMtitle>
                    <NoVest>
                        <NoVestImg src='img/emptyghost.svg' alt='' />
                        No vesting found
                    </NoVest>
                    <RToplineRightBottom mt={true}>Claim all</RToplineRightBottom>
                </RMiddle>
            </StakingRight>
        </Staking>
    )
}

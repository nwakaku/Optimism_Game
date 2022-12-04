import RankingHistory from "../components/account/RankingHistory";
import UserDeposit from "../components/deposit/UserDeposit";
import ReadingDeposit from "../components/utils/ReadingDeposit"
import { goerli, optimism, polygon } from "../components/utils/contractAddress"
import { useState } from "react";
import ModalResult from "../components/account/ModalResult";
import ModalWithdraw from "../components/account/ModalWithdraw";
import ModalClaim from "../components/account/ModalClaim";
import ModalTotalClaimed from "../components/account/ModalTotalClaimed";
import { useAccount, useContractReads } from 'wagmi'
import ABI_Npng from '../components/utils/ABI_Npng.json'
import { useAddressNetwork } from "../components/utils/useAddressNetwork";
import { ethers } from 'ethers';

function Account() {
    const [networkName, setNetworkName] = useState('');
    const [contest, setContest] = useState(0);
    const [totalClaimed, setTotalClaimed] = useState('0');
    const [pendingRewards, setPendingRewards] = useState('0');
    const [modalResult, setModalResult] = useState(false);
    const [modalWithdraw, setModalWithdraw] = useState(false);
    const [modalClaim, setModalClaim] = useState(false);
    const [modalTotalClaimed, setModalTotalClaimed] = useState(false);
    const addressNetwork = useAddressNetwork()
    const { address } = useAccount()

    useContractReads({
        contracts: [
            {
                addressOrName: addressNetwork.npngContract,
                contractInterface: ABI_Npng,
                functionName: 'getTotalClaimedRewards',
                args: [address]
            },
            {
                addressOrName: addressNetwork.npngContract,
                contractInterface: ABI_Npng,
                functionName: 'getPendingRewards',
                args: [address]
            },
        ],
        watch: true,
        onSuccess(data) {
            setTotalClaimed(ethers.utils.formatUnits(data[0]._hex, 6))
            setPendingRewards(ethers.utils.formatUnits(data[1]._hex, 6))
        },
    })

    return (
        <div className="section cc-store-home-wrap">
            <div className="container-1 cont1pageaccount w-container">
                <div className="div-block-9">
                    <div className="div-block-15">
                        <div className="div-block-18">
                            <div className="text-block-35">Your contest</div>
                            <div className="text-block-27">ranking history</div><img src="images/traits.png" loading="lazy" width="79" alt="" className="image-6 position-3" />
                        </div>
                    </div>
                    <RankingHistory setModalResult={setModalResult} setContest={setContest} />
                    <div className="div-block-29"><img src="images/next.png" loading="lazy" width="33" alt="" className="image-12" /></div>
                </div>
            </div>
            <div className="container-2 cont2pageaccount w-container">
                <div className="div-block-13">
                    <div className="card cardpageaccount"><img src="images/coin.png" loading="lazy" width="74" height="70" alt="" className="image-3" /><img src="images/Arrow.png" loading="lazy" alt="" className="image account-positionning" />
                        <div className="text-block-32">TOTAL DEPOSIT</div>
                        <UserDeposit />

                        <div className="text-block-32">Deposits</div>
                        <div className="div-block-30">
                            <div className="div-block-31"><img src="images/ethereum-eth-logo.png" loading="lazy" height="23" width="23" sizes="22.990549087524414px" srcSet="images/ethereum-eth-logo-p-500.png 500w, images/ethereum-eth-logo-p-800.png 800w, images/ethereum-eth-logo-p-1080.png 1080w, images/ethereum-eth-logo-p-1600.png 1600w, images/ethereum-eth-logo-p-2000.png 2000w, images/ethereum-eth-logo-p-2600.png 2600w, images/ethereum-eth-logo-p-3200.png 3200w" alt="" />
                                <div className="text-block-30">Goerli</div>
                            </div>
                            <div className="div-block-32">
                                <ReadingDeposit network={goerli} setModalWithdraw={setModalWithdraw} />
                                <img src="images/next.png" className="pourquoi" loading="lazy" width="25" height="25" alt=""
                                    onClick={(e) => {
                                        setNetworkName('Goerli')
                                        setModalWithdraw(true)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="div-block-30">
                            <div className="div-block-31"><img src="images/polygon-matic-logo.png" loading="lazy" height="23" width="23" alt="" />
                                <div className="text-block-30">Mumbai</div>
                            </div>
                            <div className="div-block-32">
                                <ReadingDeposit network={polygon} setModalWithdraw={setModalWithdraw} />
                                <img src="images/next.png" className="pourquoi" loading="lazy" width="25" height="25" alt=""
                                    onClick={(e) => {
                                        setNetworkName('Mumbai')
                                        setModalWithdraw(true)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="div-block-30">
                            <div className="div-block-31"><img src="images/optimism.png" loading="lazy" height="23" width="23" alt="" />
                                <div className="text-block-30">Optimism</div>
                            </div>
                            <div className="div-block-32">
                                <ReadingDeposit network={optimism} setModalWithdraw={setModalWithdraw} />
                                <img src="images/next.png" className="pourquoi" loading="lazy" width="25" height="25" alt=""
                                    onClick={(e) => {
                                        setNetworkName('Optimism')
                                        setModalWithdraw(true)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="div-block-3"></div>
                        <div className="div-block-30">
                            <div className="div-block-31"><img src="images/trophy.png" loading="lazy" height="23" width="23" sizes="22.990549087524414px" srcSet="images/trophy-p-500.png 500w, images/trophy.png 512w" alt="" />
                                <div className="text-block-34">Total claimed winnings</div>
                            </div>
                            <div className="div-block-32">
                                <div className="text-block-31">$ {totalClaimed}</div>
                                <img src="images/next.png" className="pourquoi" loading="lazy" width="25" height="25" alt=""
                                    onClick={(e) => { setModalTotalClaimed(true) }} />
                            </div>
                        </div>
                        <div className="div-block-30">
                            <div className="div-block-31"><img src="images/trophy.png" loading="lazy" height="23" width="23" sizes="22.990549087524414px" srcSet="images/trophy-p-500.png 500w, images/trophy.png 512w" alt="" />
                                <div className="text-block-30">Pending winnings</div>
                            </div>
                            <div className="div-block-32">
                                <div className="text-block-31">$ {pendingRewards}</div>
                                <img src="images/next.png" className="pourquoi" loading="lazy" width="25" height="25" alt=""
                                    onClick={(e) => { setModalClaim(true) }}
                                />
                            </div>
                        </div><img src="images/pointillés.png" loading="lazy" height="200" alt="" className="image-5 position-2" /><img src="images/coin-2.png" loading="lazy" width="60" alt="" className="image-4" />
                    </div>
                </div>
            </div>
            {modalWithdraw && networkName === 'Goerli' && <ModalWithdraw network={goerli} setModalWithdraw={setModalWithdraw} />}
            {modalWithdraw && networkName === 'Mumbai' && <ModalWithdraw network={polygon} setModalWithdraw={setModalWithdraw} />}
            {modalWithdraw && networkName === 'Optimism' && <ModalWithdraw network={optimism} setModalWithdraw={setModalWithdraw} />}
            {modalResult && <ModalResult contest={contest} setModalResult={setModalResult} />}
            {modalClaim && <ModalClaim setModalClaim={setModalClaim} pendingRewards={pendingRewards} />}
            {modalTotalClaimed && <ModalTotalClaimed setModalTotalClaimed={setModalTotalClaimed} totalClaimed={totalClaimed} />}
        </div>
    )
}

export default Account;

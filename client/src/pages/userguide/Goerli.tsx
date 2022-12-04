import { Link } from 'react-router-dom';
import { goerli } from '../../components/utils/contractAddress'

function Goerli() {
    const etherscanNpngToken = `https://goerli.etherscan.io/address/${goerli.npngToken}`
    const etherscanNpngContract = `https://goerli.etherscan.io/address/${goerli.npngContract}`


    return (
        <div className="wf-section">
            <div className="div-block-33">
                <div className="div-block-34">
                    <h1>Meta-Op Game on Ethereum Goerli </h1><img src="../../images/ethereum-eth-logo.png" loading="lazy" width="62" srcSet="../../images/ethereum-eth-logo-p-500.png 500w, ../../images/ethereum-eth-logo-p-800.png 800w, ../../images/ethereum-eth-logo-p-1080.png 1080w, ../../images/ethereum-eth-logo-p-1600.png 1600w, ../../images/ethereum-eth-logo-p-2000.png 2000w, ../../images/ethereum-eth-logo-p-2600.png 2600w, ../../images/ethereum-eth-logo-p-3200.png 3200w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 8vw, (max-width: 991px) 7vw, 61.99622344970703px" alt="" className="image-13" />
                </div>
                <p className="paragraph-user-guide">All you need to use Meta-Op Game on Ethereum Goerli is a crypto wallet, ETH for gas fees, and USDC to deposit into the protocol.
                </p>
                <h2>Adding Ethereum Goerli to your wallet</h2>
                <p className="paragraph-user-guide">In case you are using Metamask: The easiest way to add Ethereum Goerli to your wallet is by using <a href="https://chainlist.org/chain/5" target="_blank" rel="noreferrer" className="link-25">Chainlist</a>. Simply connect your wallet and tap on “Add to Metamask”.</p>
                <h2>How to Deposit</h2>
                <p className="paragraph-user-guide">Head to the Deposit tab in the Meta-Op Game App or <a href="/" className="link-18" >follow this link</a>.</p>
                <h6><strong>Step 1: Check the network &amp; enter your deposit amount</strong></h6>
                <p className="paragraph-user-guide">Using Meta-Op Game is simple! First, make sure you are on the Ethereum Goerli network. Enter the amount of USDC you want to deposit and click on <strong>Review deposit</strong>.</p>
                <h6><strong>Step 2 - Approve Tokens for deposit</strong></h6>
                <p className="paragraph-user-guide">To deposit into the Prize Pool, you need to allow the Meta-Op Game protocol to access the USDC tokens in your wallet. This happens through an approval transaction to the Meta-Op Game Prize Pool contracts. Click on <strong>Confirm approval</strong> in the Meta-Op Game App and <strong>confirm</strong> the transaction in your wallet.<br /></p>
                <h6><strong>Step 3 - Deposit Your Tokens</strong></h6>
                <p className="paragraph-user-guide">The &quot;Deposit Confirmation&quot; screen will automatically load after the approval transaction is completed. Click on <strong>Confirm deposit</strong> and <strong>confirm</strong> the deposit transaction in your wallet.</p>
                <p className="paragraph-user-guide">After the transaction has been submitted, you will be forwarded to the &quot;Deposit submitted&quot; screen. You are now eligible to participate all future contests.</p>
                <p className="paragraph-user-guide">To reflect your Meta-Op Game deposit, you will receive the <a href="https://goerli.etherscan.io/address/0x8ad6d963600f5c45dabd5ff6faa04d51a6d549f0" target="_blank" rel="noreferrer" className="link-19">npngUSDC</a> ticket token. You can add it to your wallet with the information below:</p>
                <div className="w-row">
                    <div className="column w-col w-col-3">
                        <div className="text-block-39">Ticker</div>
                        <div className="text-block-40">NPNGaUSDC</div>
                        <div className="text-block-40">npngPool</div>
                    </div>
                    <div className="column-2 w-col w-col-9">
                        <div className="text-block-39">Contract Adress</div>
                        <div className="text-block-40"><a href={etherscanNpngToken} target="_blank" rel="noreferrer">{goerli.npngToken}</a></div>
                        <div className="text-block-40"><a href={etherscanNpngContract} target="_blank" rel="noreferrer">{goerli.npngContract}</a></div>
                    </div>
                </div>
                <h2>Checking for Prizes</h2>
                <p className="paragraph-user-guide"><em>Prizes must be claimed within 60 days of them being awarded. Unclaimed prizes will no longer be claimable after 60 days.</em></p>
                <p className="paragraph-user-guide">Now that you have a Meta-Op Game deposit, you can check what prizes you won on the <a href="/account" className="link-20">Account</a> tab of the Meta-Op Game App. </p>
                <p className="paragraph-user-guide">You have up to 60 days to claim a prize whenever you win. Claiming a prize will cost a transaction fee. Multiple prizes can be claimed at once. </p>
                <p className="paragraph-user-guide">Follow <Link to="/userguide/faq" className="link-21">this link</Link> for information about prizes and winning.</p>
                <h2>How to Withdraw</h2>
                <p className="paragraph-user-guide">You can withdraw your deposit from Meta-Op Game in the <a href="/account" className="link-22">Account</a> tab of the Meta-Op Game App at any time. </p>
                <p className="paragraph-user-guide">To withdraw, choose a deposit and click on <strong>Withdraw</strong>. Next, enter the amount you want to withdraw and click <strong>Review withdrawal</strong>. On the next screen, hit <strong>Confirm withdrawal</strong> and <strong>confirm</strong> the transaction in your wallet.</p>
            </div >
        </div >
    )
}

export default Goerli;
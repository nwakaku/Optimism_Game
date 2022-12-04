import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ethers } from 'ethers'
import ABI_ERC20 from './ABI_ERC20.json'
import { useAddressNetwork } from './useAddressNetwork'

const Faucet = () => {
    const addressNetwork = useAddressNetwork()

    const { config } = usePrepareContractWrite({
        addressOrName: addressNetwork.usdcContract,
        contractInterface: ABI_ERC20,
        functionName: 'mint',
        args: [ethers.utils.parseUnits('1000', 6)]
    })

    const { write } = useContractWrite(config)

    return (
        <a className="button-2 w-button" href="/" onClick={(e) => {
            e.preventDefault()
            write?.()
        }
        }>
            FAUCET 1000 USDC
        </a>
    )
}

export default Faucet;
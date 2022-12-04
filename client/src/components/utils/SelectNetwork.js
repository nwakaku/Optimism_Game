import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const customStyles = {
    control: () => ({
        alignItems: "center",
        borderColor: "#000",
        borderRadius: "15px",
        borderStyle: "solid",
        display: "flex",
        flexWrap: "wrap",
        borderWidth: "2px"
    }),
}

const data = [
    {
        value: 5,
        text: 'Goerli',
        icon: <img src="images/ethereum-eth-logo.png" loading="lazy" width="25" srcSet="images/ethereum-eth-logo-p-500.png 500w, images/ethereum-eth-logo-p-800.png 800w, images/ethereum-eth-logo-p-1080.png 1080w, images/ethereum-eth-logo-p-1600.png 1600w, images/ethereum-eth-logo-p-2000.png 2000w, images/ethereum-eth-logo-p-2600.png 2600w, images/ethereum-eth-logo-p-3200.png 3200w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-11" />
    },
    {
        value: 10,
        text: 'Optimism',
        icon: <img src="images/optimism.png" loading="lazy" width="25" alt="" className="image-11" />
    },
    {
        value: 80001,
        text: 'Mumbai',
        icon: <img src="images/polygon-matic-logo.png" loading="lazy" width="20" height="20" alt="" />
    },
];

function SelectNetwork() {
    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()
    const [selectedOption, setSelectedOption] = useState(data[0]);

    useEffect(() => {
        if (chain) {
            switch (chain.id) {
                case 5:
                    setSelectedOption(data[0]);
                    break;
                case 10:
                    setSelectedOption(data[1]);
                    break;
                case 80001:
                    setSelectedOption(data[2]);
                    break;
                default:
                    setSelectedOption(data[0]);
            }
        }
    }, [chain]);

    const handleChange = e => {
        setSelectedOption(e);
        switchNetwork(e.value)
    }

    return (
        <div className="">
            <Select
                styles={customStyles}
                value={selectedOption}
                options={data}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                )}
            />
        </div>
    );
}

export default SelectNetwork;

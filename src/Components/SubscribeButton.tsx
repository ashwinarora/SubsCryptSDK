import Web3 from "web3";
import SubsCrypt from "../abi/SubsCrypt.json";

interface IButtonProps {
    serviceId: string,
    address: string,
    contractAddress: string,

}

const SubscribeButton = ({serviceId, address, contractAddress}: IButtonProps) => {
  return (
    <button
        onClick={async () => {
            const web3 = new Web3()
            const contract = new web3.eth.Contract(SubsCrypt.abi as any, contractAddress)
            try {
                await contract.methods.subscribeTo(serviceId).send({ from: address });
            } catch (error) {
                console.log(error)
            }
        }}
    >
        Subscribe
    </button>
  )
}

export default SubscribeButton
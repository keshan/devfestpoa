import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { ethers } from "ethers";
import contract from '../artifacts/contract_address.json'
import abi from '../artifacts/contracts/MintContract.sol/MintContract.json'

function Main() {
  const user = useContext(UserContext);
  const [isMinting, setIsMinting] = useState(false)

  const mint = async () => {
    setIsMinting(true)
    const ethereum = window.ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(ethereum)
    const walletAddress = accounts[0]
    const signer = await provider.getSigner(walletAddress)

    const mintContract = new ethers.Contract(contract.ContractAddress, abi.abi, signer)
    try {
      const tokenId = await mintContract.createToken()
      console.log(`${tokenId}`)
    } catch (e) { }

    setIsMinting(false)

  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {window.ethereum ?
          (user.isLogged ? isMinting ? <button className="btn btn-outline btn-lg text-slate-400 loading btn-disabled">Minting</button> : <button className="btn btn-outline btn-lg hover:bg-accent text-slate-400" onClick={mint}>Mint</button> : <span className="text-slate-400 text-lg">Please Connect your wallet to mint</span>) : <span>No wallet installed</span>}
      </div>
    </div>
  );
}

export default Main;

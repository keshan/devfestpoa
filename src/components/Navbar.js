import React, { useEffect, useContext } from "react";
import { ethers } from "ethers";
import { UserContext } from "../context/userContext";
import truncateAddress from "../utils/addressUtils";

function Navbar() {
  useEffect(() => {
    if (!window.ethereum) {
      //alert("no wallet");
    }
  }, []);

  const user = useContext(UserContext);

  const connect = async () => {
    console.log("first");
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    user.setAddress(await signer.getAddress());
    user.setIsLogged(true);
  };
  return (
    <div className="flex bg-transparent p-5 justify-between items-center">
      <span className="font-bold">DevFest LK</span>
      <div className="mr-3">
        {user.isLogged ? (
          <span className="text-xs hover:text-sm">
            {truncateAddress(user.address)}
          </span>
        ) : (
          <button
            className="btn btn-accent bg-opacity-30 border-opacity-25 font-press-start hover:btn-accent"
            onClick={connect}
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

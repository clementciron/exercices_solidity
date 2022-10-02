import React from "react";
import { useState } from "react";
import { ethers } from "ethers";

/* Cette page:
-se connecte à metamask
-affiche le compte concerné via ethers.js


*/

export default () => {
    const [walletAddress, setWalletAddress] = useState("");
    async function requestAccount() {
        console.log("Requesting account...");

        // ❌ Check if Meta Mask Extension exists
        if (window.ethereum) {
            console.log("detected");

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log("Error connecting...");
            }
        } else {
            alert("Meta Mask not detected");
        }
    }
    // créée un provider qui interragit avec le smart contract
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();

            const provider = new ethers.providers.Web3Provider(window.ethereum);
        }
    }

    return (
        <div>
            <h1>Page de la nouvelle campagne kickstarter</h1>
            <button onClick={requestAccount}>
                Connecter le wallet à Metamask
            </button>

            <h3>Adresse du wallet: {walletAddress}</h3>
        </div>
    );
};
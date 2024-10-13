import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { Col, Layout, Row } from "antd";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import {
  AptosWalletAdapterProvider,
  useWallet,
} from "@aptos-labs/wallet-adapter-react";

// import { PetraWallet } from "petra-plugin-wallet-adapter";
// import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import React, { useEffect, useState } from "react";
import { Aptos, AptosConfig, get, Network } from "@aptos-labs/ts-sdk";
import { AddressAtom } from "../Utils/AddressAtom";
import { Findme } from "../Utils/Findme";

import { accumulativeContext } from "@react-three/drei";
import { useAtom } from "jotai";
import { socket } from "../Socketmanager";
import { mintfunc } from "../Component/AptosFunctions";

const ConnectAptos = () => {
  const [me, setme] = useAtom(Findme);
  const wallets = [new PetraWallet()];
  const [addreses, setAddress] = useAtom(AddressAtom);
  const { account } = useWallet();
  const { signAndSubmitTransaction } = useWallet();
  const [coins,setcoins] = useState(0);
   const getBalancePerson = async () => {

    if (!account || !account.address) {
      console.error("Account is not defined or missing address.");
      return null;
    }
    // try {
    //   const result = await aptos.view({
    //     function: `${moduleAddress}::BasicCoins::balance`, // View function to call
    //     arguments: [], // No arguments required for this function
    //   });

    //   console.log("Message content:", result);
    //   console.log(result);
    //   return result;
    // } catch (error) {
    //   console.error("Failed to get message content:", error);
    // }
    // // aptos.getAccountResource({
    // //   //       accountAddress: account?.address,
    // //   //       resourceType: `${moduleAddress}::message_board::Message`,
    // //   //     });

    // console.log("Account Address:", account.address); // Log the account address

    try {
      // Define the resource type string
      // const resourceType = `${moduleAddress}::CounterModule_v5::Counter`;
      // console.log("Resource Type:", resourceType); // Log the resource type for debugging

      // Fetch the resource
      const accountResource = await aptos.getAccountResource({
        accountAddress: account?.address,
        resourceType: `${moduleAddress}::BasicCoins::Balance`,
      });
      console.log("Account Resource Response:", accountResource); // Log the full response

      // Check if accountResource or its data is undefined
      if (!accountResource) {
        console.error(
          "Resource is undefined. The account may not have the Counter resource."
        );
        return null;
      }
setcoins(accountResource.coins.val)
      if (!accountResource.value) {
        console.error("Data field in the resource is undefined.");
        return null;
      }
      setcoins(accountResource.value);

      // Check if value is undefined or null before calling toString
      // const counterValue =
      //   accountResource.data.value !== undefined
      //     ? accountResource.data.value.toString()
      //     : null;

      // if (counterValue === null) {
      //   console.error("Counter value is undefined.");
      //   return null;
      // }

      // console.log("Counter Value:", counterValue); // Log the value of the counter
    } catch (error) {
      console.error("Error fetching counter value:", error);
      return null;
    }
  };

  const burn1 = async () => {
    if (!account) return;
    const transaction = {
      data: {
        function: `${moduleAddress}::BasicCoins::burn`,
        functionArguments: ["1"],
      },
    };

    try {
      const response = await signAndSubmitTransaction(transaction);

      await aptos.waitForTransaction({ transactionHash: response.hash });

      console.log("Minting successful");
    } catch (error) {
      console.error("Minting failed:", error);
    }
  };
  const Transfer = async () => {
    if (!account || !account.address) {
      console.error("Account is not defined or missing address.");
      return null;
    }
    if (!account) return [];
  const transaction = {
    data: {
      function: `${moduleAddress}::BasicCoins::transfer`,
      functionArguments: [
      "0x2a2f75fadf5ab3bbbe9baffc87f0f6be11aece54350ac85abb68ade94404dc89",
      1
      ],
    },
  };
  try {
    // sign and submit transaction to chain
    const response = await signAndSubmitTransaction(transaction);
    // wait for transaction
    await aptos.waitForTransaction({ transactionHash: response.hash });
    setAccountHasList(true);
  } catch (error) {
    setAccountHasList(false);
  } finally {
  }
  }
  const mint1 = async () => {
    if (!account) return;

    const transaction = {
      data: {
        function: `${moduleAddress}::BasicCoins::mint`,

        functionArguments: ["1"],
      },
    };

    try {
      const response = await signAndSubmitTransaction(transaction);

      await aptos.waitForTransaction({ transactionHash: response.hash });

      console.log("Minting successful");
    } catch (error) {
      console.error("Minting failed:", error);
    }
  };
  const aptosConfig = new AptosConfig({ network: Network.TESTNET });
  const moduleAddress =
    "0x192a07e0b7fe341017541039d15a86be023a955e9aa1c6db478e767209c576af";
  const aptos = new Aptos(aptosConfig);
  useEffect(() => {
    if (account && account.address) {
      socket.emit("setAccountAddress", account.address);
    }
  }, [account]);
  useEffect(()=>{
    
    if(account){
      getBalancePerson();
    }
  },[account.address])
  const handleMint = () => mintfunc(account, signAndSubmitTransaction);
  return (
    <div className="w-full scale-50 flex-col items-center justify-center  bg-green-100/40 absolute z-50 ">
      <WalletSelector />
      <div
        className="text-xs
      
      "
      >
        {account != null && account.address}
      </div>
      <button
        onClick={handleMint}
        className="bg-blue-500 absolute right-6 -top-2 hover:bg-blue-700  text-lg border-none text-white font-bold py-2 px-4 rounded mt-2"
      >
        Mint
      </button>
      <button
        onClick={burn1}
        className="bg-blue-500 absolute right-20 top-24 hover:bg-blue-700  text-lg border-none text-white font-bold py-2 px-4 rounded mt-2"
      >
        Burn
      </button>
      <button 
      onClick={Transfer}
        className="bg-blue-500 absolute right-14 top-10 hover:bg-blue-700  text-lg border-none text-white font-bold py-2 px-4 rounded mt-2"
        >
        Transfer
      </button>
      <div className=' absolute text-lg   -right-[5rem] -top-1  text-[15px]' >  {coins} 🪙</div>

    </div>
    // <Layout>
    //   <Row align="middle">
    //     <Col span={10} offset={2}>
    //       <h1>Our todolist</h1>
    //     </Col>
    //     <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
    //       <h1>Connect Wallet</h1>
    //       <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>
    //         <WalletSelector />
    //       </Col>
    //     </Col>
    //   </Row>
    // </Layout>
  );
};
export default ConnectAptos;

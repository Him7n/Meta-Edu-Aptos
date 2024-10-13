import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const moduleAddress = "0x192a07e0b7fe341017541039d15a86be023a955e9aa1c6db478e767209c576af";
const aptos = new Aptos(aptosConfig);

export const mintfunc = async (account, signAndSubmitTransaction, amount) => {
  if (!account) return;

  const transaction = {
    data: {
      function: `${moduleAddress}::BasicCoins::mint`,
      functionArguments: [amount.toString()],
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

export const burn1 = async (account, signAndSubmitTransaction, amount) => {
  if (!account) return;
  const transaction = {
    data: {
      function: `${moduleAddress}::BasicCoins::burn`,
      functionArguments: [amount.toString()],
    },
  };

  try {
    const response = await signAndSubmitTransaction(transaction);
    await aptos.waitForTransaction({ transactionHash: response.hash });
    console.log("Burning successful");
  } catch (error) {
    console.error("Burning failed:", error);
  }
};

export const Transfer = async (account, signAndSubmitTransaction, recipientAddress, amount) => {
  if (!account || !account.address) {
    console.error("Account is not defined or missing address.");
    return null;
  }
  const transaction = {
    data: {
      function: `${moduleAddress}::BasicCoins::transfer`,
      functionArguments: [
        recipientAddress,
        amount.toString()
      ],
    },
  };
  try {
    const response = await signAndSubmitTransaction(transaction);
    await aptos.waitForTransaction({ transactionHash: response.hash });
    console.log("Transfer successful");
  } catch (error) {
    console.error("Transfer failed:", error);
  }
};
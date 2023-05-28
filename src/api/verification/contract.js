import { BrowserProvider, Contract } from "ethers";

import storageContractABI from "../abi/storage_sol_abi.json";

export const veriyStorageContract = async (contractAddress) => {
  const { ethereum } = window;

  if (!ethereum) {
    return;
  }
  const provider = new BrowserProvider(ethereum);

  const signer = await provider.getSigner(0);

  console.log(
    contractAddress,
    storageContractABI, // use list due to https://github.com/ethers-io/ethers.js/issues/1238
    signer
  );

  const storageContract = new Contract(
    contractAddress,
    storageContractABI, // use list due to https://github.com/ethers-io/ethers.js/issues/1238
    signer
  );

  const valueToStore = 32;

  const tx = await storageContract.store(valueToStore);
  await tx.wait();
  const storedValue = await storageContract.retrieve();

  console.log(
    storedValue,
    String(storedValue),
    String(valueToStore),
    String(storedValue) === String(valueToStore)
  );

  return String(storedValue) === String(valueToStore);
};

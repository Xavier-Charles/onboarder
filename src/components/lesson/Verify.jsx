import { motion } from "framer-motion";
import {
  checkBalance,
  checkNetwork,
  connectWallet,
} from "../../api/verification/wallet";
import { useState } from "react";
import { veriyStorageContract } from "../../api/verification/contract";

const Verify = ({
  selectedItem,
  // selectedOptionId,
  // setSelectedOptionId,
  setCardProgress,
}) => {
  const [error, setError] = useState(null);
  const [addressInput, setddressInput] = useState("");

  const markAsCompleted = () => {
    setCardProgress((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      });
    });
  };

  const verifyNetwork = async () => {
    connectWallet();
    const currentNetwork = await checkNetwork();
    if (parseInt(currentNetwork) === selectedItem.answer) {
      markAsCompleted();
    } else {
      setError("Wrong Network detected");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const verifyBalance = async () => {
    connectWallet();
    // const currentNetwork = await checkNetwork();
    const balance = await checkBalance();

    if (balance > selectedItem.answer) {
      markAsCompleted();
    } else {
      setError("Balance less than required");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const verifyNewStorageContract = async () => {
    if (addressInput === "") {
      setError("Please enter a contract address");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    const verified = await veriyStorageContract(addressInput);

    if (verified) {
      markAsCompleted();
    }
  };

  const getVerification = (type) => {
    if (type?.includes("network")) return verifyNetwork;
    if (type?.includes("storage")) return verifyNewStorageContract;
    return verifyBalance;
  };

  return (
    <>
      <div className="text-red-700 mt-6 relative">
        {error && (
          <>
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline pl-2">{error}</span>
          </>
        )}
      </div>

      {selectedItem.hasInput && (
        <div className="mt-2">
          <input
            type="contract-address"
            name="contract-address"
            id="contract-address"
            value={addressInput}
            onChange={(e) => setddressInput(e.target.value)}
            className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oxford sm:text-sm sm:leading-6"
            placeholder="Paste your contract address"
          />
        </div>
      )}

      <motion.button
        onClick={getVerification(selectedItem.type)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-md mt-6 bg-teal/90 px-5 py-3.5 font-semibold text-magwhite shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        Verify
      </motion.button>
    </>
  );
};

export default Verify;

import { motion } from "framer-motion";
import { checkBalance, checkNetwork, connectWallet } from "../../api/verification/wallet";
import { useState } from "react";

const Verify = ({
  selectedItem,
  selectedOptionId,
  setSelectedOptionId,
  setCardProgress,
}) => {
  const [error, setError] = useState(null);

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
    console.log(
      "currentNetwork",
      parseInt(currentNetwork),
      selectedItem.answer
    );
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
    const balance = await checkBalance()

    console.log("balance", parseInt(balance), selectedItem.answer);
 
    if (balance >  selectedItem.answer) {
      markAsCompleted();
    } else {
      setError("Balance less than required");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <>
      <div className="text-red-700 mt-6 relative">
        {error && (
          <>
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">{error}</span>
          </>
        )}
      </div>

      <motion.button
        onClick={
          selectedItem.type?.includes("network") ? verifyNetwork : verifyBalance
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-md mt-6 bg-teal/90 px-5 py-3.5 font-semibold text-magwhite shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        Connect Wallet to Verify
      </motion.button>
    </>
  );
};

export default Verify;

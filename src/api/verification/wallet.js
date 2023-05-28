export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      // const accounts =
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log(accounts);
    } catch (error) {
      return false;
    }
  }
};

export const checkNetwork = async () => {
  if (window.ethereum) {
    try {
      const network = await window.ethereum.request({
        method: "net_version",
      });
      return network;
    } catch (error) {
      return false;
    }
  }
};

export const checkBalance = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("check balance");
      console.log(accounts);
      if (accounts[0]) {
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        });
        return balance;
      }
    } catch (error) {
      return false;
    }
  }
};

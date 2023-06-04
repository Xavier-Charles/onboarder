import q9 from "../../../assets/img/questions/mantle/q9.jpg";
import q10 from "../../../assets/img/questions/mantle/q10.jpg";
import q11 from "../../../assets/img/questions/mantle/q11.jpg";
import q12 from "../../../assets/img/questions/gnosis/q12.png";
import { linkGen, strongGen } from "../../../utils/textUtils";

export const lesson3Questions = [
  {
    id: 9,
    title: "Add Mantle Wadsley Testnet Network to metamask",
    subtitle:
      "Add Mantle Wadsley Testnet Network to your MetaMask to interact deploy a contract",

    summary: `
              Mantle's Wadsley is a testnet that was launched in October 2022. 
              Mantle Wadsley's primary purpose is to be a long-lived testnet with tooling for developers
              To add Mantle Wadsley Testnet to your metamask, follow this guide:
              <li> Click ${linkGen(
                "https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params[0][chainId]=0x1389&params[0][chainName]=Mantle%20Wadsley&params[0][rpcUrls][0]=https://rpc.testnet.mantle.xyz&params[0][nativeCurrency][name]=Bit&params[0][nativeCurrency][symbol]=Bit&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://explorer.testnet.mantle.xyz",
                "Add Mantle Wadsley testnet"
              )}.</li>
              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>When MetaMask prompts another window, click <strong>Switch network.</strong></li>
              <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q9,
    question:
      "Once you connect your wallet, we will check if you've switched to the correct network.",
    answer: 5001,
    type: "verify-network",
    classes: "lg:w-1/3",
  },
  {
    id: 10,
    title: "Get test $Bit",
    subtitle:
      "Get testnet $Bit on the Mantle Wadsley network from the faucet to deploy your contract.",
    summary: `Mantle uses $BIT as its native token, they have a $BIT faucet on ETH Goerli.
              This faucet is an ERC-20 implementation of $BIT, with the addition of a faucet method that can mint tokens for the caller.
              <br /><br /> You'll need Roughly 0.00012 gETH to pay the gas fee for minting testnet $BIT. Get gEth at ${linkGen(
                "https://faucet.paradigm.xyz/",
                "Paradigm faucet"
              )} or at ${linkGen(
      "https://goerlifaucet.com/",
      "Alchemy faucet"
    )}.
              <br /><br /> Go to the ${linkGen(
                "https://faucet.testnet.mantle.xyz/",
                "Mantle faucet"
              )} to get $Bit. You'll need to authenticate with your twitter account, connect yout wallet, click the ${strongGen(
      "Mint token"
    )} button and approve the transaction.
              <br /><br /> The $Bit you just minted won't show in your wallet right way. Go to the next step and we will show you how to add it to your wallet.
             `,
    img: q10,
    question:
      "Once you connect your wallet, we will check if you've have $Bit.",
    answer: 0.0001,
    type: "verify-balance",
    classes: "lg:w-1/3",
  },
  {
    id: 11,
    title: "Bridge $Bit to Mantle Wadsley",
    subtitle:
      "You've got $Bit on the Goerli, now bridge it to the Mantle Wadsley testnet.",

    summary: `Now use the Mantle Testnet Bridge on Goerli to bridge your tokens by following the steps below:
              <ol class="list-decimal pl-5">
                <li>Go to the ${linkGen(
                  "https://bridge.testnet.mantle.xyz/",
                  "Mantle Bridge"
                )} connect your wallet, select the amount of $Bit you want to deposit e.g 10, and click the ${strongGen(
      "Allocate allowance before depositing assets"
    )} Button. </li>
                <li>Add your custom spending cap on metamask. It should be higher than the amount of $Bit you want to transfer e.g 11, and click the ${strongGen(
                  "Next"
                )} & ${strongGen("Approve")} buttons.</li>
                <li>Click the ${strongGen(
                  "Deposit Tokens to L2"
                )} and ${strongGen(
      "Confirm"
    )} button. It should take about 10 mins to reflect in your wallet</li>
                <li>Add the Goerli testnet $BIT contract address to your wallet ${linkGen(
                  "https://shanejonas.github.io/metamask-link/deep?method=wallet_watchAsset&params[type]=ERC20&params[options][address]=0x5a94dc6cc85fda49d8e9a8b85dde8629025c42be&params[options][symbol]=$Bit&params[options][decimals]=18&params[options][image]=https://i.imgur.com/VqFhr8m.png",
                  "with this link"
                )}.</li>
                <li>Click the ${strongGen("Add token")} and ${strongGen(
      "Add token"
    )} button</li>
                <li>You can use this same bridge to withdraw $BIT token from Mantle to ETH Goerli</li>
                <li>Switch back to the Wadsley Testnet then come back here and verify.</li>
              </ol>
             `,
    img: q11,
    question:
      "Once you connect your wallet, we will check if you've have $Bit.",
    answer: 0.0001,
    type: "verify-ERC20-balance",
    address: "0x5a94dc6cc85fda49d8e9a8b85dde8629025c42be",
    classes: "lg:w-1/3",
  },
  {
    id: 12,
    title: "Deploying your contract",
    subtitle: "Deploy a contract on the gnosis chain using the Remix IDE",
    summary: `
              Remix is a web-based IDE for deploying smart contracts. To deploy a contract on Wadsley:
              <ol class="list-decimal pl-5">
                <li>Head over to ${linkGen(
                  "https://remix-project.org/",
                  "Remix IDE"
                )}.</li>
                <li>Click <strong>contracts</strong> folder and select ${strongGen(
                  "Storage.sol"
                )}. This is a simple contract that stores and retrieves a number. </li>
                <li>Next, click the complile icon (as shown in the image) and then the button ${strongGen(
                  "Compile 1_Storage.sol"
                )}</li>
                <li>Next click the deploy icon (as shown in the image)</li>
                <li>In the options for Environment select ${strongGen(
                  "InjectedProvider - Metamask"
                )}</li>
                <li>Ensure the address in the account option matches your address. Then click the ${strongGen(
                  "Deploy"
                )} button </li>
                <li>Confirm the transaction in Metamask</li>
              </ol>
             `,
    img: q11,
    question: "Have you compiled and deployed your contract?",
    options: {
      1: { id: 1, value: "Yes I have!" },
    },
    answer: 1,
    classes: "lg:w-1/2",
  },

  {
    id: 13,
    title: "Verifying your contract",
    subtitle: "Let's verify your contract on the Mantle Wadsley Testnet.",

    summary: `
              When you compile a Solidity smart contract, it generates an ABI and bytecode. If you deployed the ${strongGen(
                "Storage.sol"
              )} contract we have an ABI similar to yours. We are going to store and retrieve a number from your contract. Storing a number in your contract will cost you a small amount of $Bit. You would need to approve the transaction in Metamask.
              To get your contract address:
              <ol class="list-decimal pl-5">
              <li>On the deploy section of Remix, go to ${strongGen(
                "Deployed Contracts"
              )}</li>
              <li>Click the copy Icon to copy the address of your deployed contract then come back here to verify your contract</li>
              </ol>
             `,
    img: q12,
    question: "Paste the Address you copied in the text box below.",
    answer: true,
    type: "verify-storage-contract",
    hasInput: true,
    classes: "lg:w-1/2",
  },
];

import q5 from "../../../assets/img/questions/greenfield/q5.png";
import q6 from "../../../assets/img/questions/gnosis/q6.png";
// import q7 from "../../../assets/img/questions/greenfield/q7.png";
import q8 from "../../../assets/img/questions/gnosis/q8.png";

export const lesson2Questions = [
  {
    id: 5,
    title: "Understanding Wallet Security in Crypto",
    subtitle:
      "The risks associated with single key wallets and the need for better solutions",
    summary:
      "Most crypto users use single key wallets, also known as externally owned accounts (EOAs), such as MetaMask, Trustwallet, and Exodus, secured with a 12-word seed phrase that transforms into a user's private key. However, if the private key is compromised, funds can be stolen. This form of wallet is especially risky for projects involving more than one person, as any mishandling of the private key can lead to a permanent loss of funds. Therefore, there's a need for a more secure solution to manage crypto funds.",
    img: q5,
    question: "What is the risk associated with single key wallets or EOAs?",
    options: {
      1: { id: 1, value: "They can't store large amounts of cryptocurrency" },
      2: { id: 2, value: "They are vulnerable to private key compromise" },
      3: { id: 3, value: "They are not widely supported by crypto exchanges" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 6,
    title: "Safe: A Solution for Crypto Security",
    subtitle:
      "Exploring the benefits and security features of safe multisig wallet",
    summary:
      "Safe is a smart contract wallet operating on multiple blockchains, introduces the concept of multisig (M-of-N) wallets. This allows for a minimum number of people to approve a transaction before it can be executed. For instance, a business with three main stakeholders could require approval from two out of three or all three members for a transaction to be sent, ensuring funds can't be compromised by a single individual. Safe provides complete self custody over funds, with the deployed smart contract being trustless and entirely under user control.",
    img: q6,
    question: "What is the key feature of a multisig wallet?",
    options: {
      1: { id: 1, value: "It allows instant transactions" },
      2: {
        id: 2,
        value:
          "It requires approval from a minimum number of people for transactions",
      },
      3: { id: 3, value: "It allows unlimited number of transactions per day" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
  {
    id: 7,
    title: "Create a Safe Multisig Wallet",
    subtitle:
      "The most trusted decentralized custody protocol and collective asset management wallet",

    summary: `<ol class="list-decimal pl-5">
              <li>Visit <a class="text-jetbrown underline" target="_blank" href="https://app.safe.global/">app.safe.global</a> to create your own safe</li>
              <li>Click <strong>Connect Wallet</strong> and choose any of the available wallets you own</li>
              <li>Next, click <strong>Create new Safe</strong></li>
              <li>Add a name for your safe and select a network. You can use <strong>Goerli</strong> testnet to try it out</li>
              <li>This would require some goerli tokens. If you don't get some from a goerli faucet</li>
              <li>Confirm the transaction. Once it the transaction is complete you'll have a brand new Safe!</li>
              </ol>
             `,
    img: q5,
    question:
      "Have you created a Safe Multisig Wallet? (You'll need it to answer the next question)",
    options: {
      1: { id: 1, value: "Yes I have!" },
      2: { id: 2, value: "No I haven't" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
  {
    id: 8,
    title: "The Safe Apps ecosystem",
    subtitle:
      "Learn about web3 applications you can connect securely and efficiently to your Safe",
    summary: `On the side menu to the left, click the Apps option or go to
              <a class="text-jetbrown underline" target="_blank" href="https://app.safe.global/apps">app.safe.global/apps</a> page. 
              You can find a list of web3 applications that you can connect to your Safe. You can also build your own Safe App and submit it to the Safe Apps page.
              <br /> These Apps extend the functionality of your Safe and allow you to interact with your funds in new ways.
             `,
    img: q8,
    question:
      "Which of these apps is not available on the Safe Apps page? (Hint: You can find the answer on the Safe Apps page)",
    options: {
      1: { id: 1, value: "Drain Account" },
      2: { id: 2, value: "Pancake swap" },
      3: { id: 3, value: "DexFiat" },
    },
    answer: 3,
    classes: "lg:w-2/3",
  },
];

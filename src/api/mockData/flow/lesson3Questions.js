import q9 from "../../../assets/img/questions/mantle/q9.jpg";
import q10 from "../../../assets/img/questions/mantle/q10.jpg";
import q11 from "../../../assets/img/questions/mantle/q11.jpg";
import q12 from "../../../assets/img/questions/gnosis/q12.png";
import { linkGen, strongGen } from "../../../utils/textUtils";

export const lesson3Questions = [
  {
    id: 9,
    title: "Hello World Smart Contract",
    subtitle:
      "A step-by-step guide to writing, understanding, and deploying a basic 'Hello World' smart contract",
    summary: `
    Go to the ${linkGen(
      "https://play.flow.com/",
      "Cadence Playground"
    )}, you'll find in ${strongGen(
      "Contract 1"
    )} a basic "Hello World" smart contract. Smart contracts can be deployed to accounts and can be interacted with using transactions or scripts.
    <br /><br />
    We begin by declaring a public contract named "Hello World" (the ${strongGen(
      "pub"
    )} keyword and be used interchangeably with ${strongGen(
      "access(all)"
    )}) be that anyone can import and access. This public field is a constant declared with the keyword "let", meaning its value can be set once and not changed later. Cadence, a strictly typed language, is used, enforcing consistency and preventing bugs.
    <br /><br />
    We then initialize our smart contract, setting the constant field's value to "Hello World", which can't be altered later. A getter method is created, returning the value of the greeting, which is a string.
    <br /><br />
    Finally, the smart contract is ready for deployment. Once deployed (by clicking the green ${strongGen(
      "Deploy"
    )} button), the contract is accessible to anyone on the blockchain. They can import the code and use the hello function to greet the world.
    `,
    img: q9,
    question: "What is the primary purpose of types in the Cadence language?",
    options: {
      1: { id: 1, value: "To enhance developer experience" },
      2: {
        id: 2,
        value:
          "To prevent bugs and stop code from running due to incompatible types",
      },
      3: { id: 3, value: "To deploy the contract" },
    },
    answer: 2,
    classes: "lg:w-1/2",
  },
  {
    id: 10,
    title: "Introduction to Flow Transactions and Contracts",
    subtitle:
      "A Comprehensive Look at How Transactions, Scripts, and Smart Contracts Operate in Flow",
    summary: `Transactions and scripts are used to interact with flow contracts. Transactions can modify and read data from a contract, while scripts are used to read data without a fee.
    <br /><br />
    When an account authorizes a transaction, the code in that transaction has access to the authorizers' private storage.
    Go to the transactions section on the side bar and open the Transaction file, and execute it, at the bottom right section the signer to be select account 1 then click the ${strongGen(
      "send"
    )} button.
    <br /><br /> In the logs below you should see  ${strongGen(
      '"Hello, World!"'
    )}`,
    img: q10,
    question: "Which one is used only to read data from flow?",
    options: {
      1: { id: 1, value: "Transaction" },
      2: { id: 2, value: "Script" },
      3: { id: 3, value: "Smart Contract" },
    },
    answer: 2,
    classes: "lg:w-1/2",
  },
  {
    id: 11,
    title: "Working with Resources",
    subtitle: "Understanding and handling resources in a flow contract",

    summary: `Now go to the ${linkGen(
      "https://play.flow.com/b70199ae-6488-4e58-ae58-9f4ffecbd66a",
      "Cadence Playground"
    )}, you'll find in ${strongGen(
      "Contract 1"
    )} a "Hello World" contract with a resource.
    <br /><br />
    In Cadence, resources are a composite type like a struct or a class, but with some special rules. Resources are useful when you want to model direct ownership.
    <br /><br />
    In the HelloWorld contract, we:
    <ol class="list-decimal pl-5">
    <li>Declare the resource HelloAsset with public scope pub</li>
    <li>Declare the resource function hello() inside HelloAsset with public scope pub</li>
    <li>Declare the contract function createHelloAsset() which creates a HelloAsset resource</li>
    <li>The createHelloAsset() function uses the move operator (<-) to return the resource</li>
    </ol>
    `,
    img: q11,
    question:
      "What happens if you try to load a resource from an account that doesn't have it?",
    options: {
      1: { id: 1, value: "The transaction runs without errors" },
      2: { id: 2, value: "An error occurs indicating nil value" },
      3: { id: 3, value: "The resource gets created automatically" },
    },
    answer: 2,
    classes: "lg:w-1/2",
  },
  {
    id: 13,
    title: "Hello Transaction",
    subtitle: "Let's verify your contract on the Mantle Wadsley Testnet.",

    summary: `
             Now go to the transactions section of the playground. You'll find a transaction named ${strongGen(
               "Create Hello"
             )}. It is pretty well documented, so you can read through it to understand what it does.
              <br /><br />
              Select the signer and click the ${strongGen(
                "Send"
              )} button. You'll see the transaction being executed in the logs below.
             `,
    img: q12,
    question: "What message did you see when you excecuted the transaction?",
    options: {
      1: { id: 1, value: "Saved Hello Resource to account." },
      2: { id: 2, value: "An error occurs indicating nil value" },
      3: { id: 3, value: "Transaction Success" },
    },
    answer: 1,
    classes: "lg:w-1/2",
  },
];

import q5 from "../../../assets/img/questions/theta/q5.png";
import q6 from "../../../assets/img/questions/theta/q6.png";
import q7 from "../../../assets/img/questions/theta/q7.png";
import q8 from "../../../assets/img/questions/theta/q8.png";

export const lesson2Questions = [
  {
    id: 5,
    title: "Introduction to Theta Video API",
    subtitle: "Building decentralized video applications simplified",
    summary:
      "Theta Video API makes it easy to build decentralized video into any application. By leveraging the Theta network, users can easily upload a video and get a playable link to add to their site. This promotes decentralized video handling and enables peer-to-peer video relaying over the Theta Network.",
    img: q5,
    question: "What does Theta Video API enable users to do?",
    options: {
      1: { id: 1, value: "Upload and get playable links for videos" },
      2: { id: 2, value: "Create interactive games" },
      3: { id: 3, value: "Design complex AI algorithms" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
  {
    id: 6,
    title: "How Developers Can Utilize Theta Video API",
    subtitle: "Ease of integration and cost-effectiveness",
    summary:
      "Developers can post a video file to the Theta Video API ingest endpoint and get a playable URL and a few lines of JavaScript code for the Theta decentralized stream delivery library. Theta Video API aims to reduce the cost of starting a new video platform, promoting more content types and creators. The need for costly contracts with tech giants is eliminated, providing a leveled playing field for small to medium-sized sites.",
    img: q6,
    question: "What does Theta Video API provide developers?",
    options: {
      1: {
        id: 1,
        value: "A playable URL and JavaScript code for video streaming",
      },
      2: { id: 2, value: "Advanced game development tools" },
      3: { id: 3, value: "Data analytics tools" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
  {
    id: 7,
    title: "Upload a video with Theta Video API",
    subtitle:
      "Upload a video to the Theta Video API and get a playable link to add to your site.",

    summary: `<ol class="list-decimal pl-5">
              <li>You can sign up for a free developer account at <a class="text-jetbrown underline" target="_blank" href="https://www.thetavideoapi.com/sign-up">here</a>.</li>
              <li>You may have to join a waitlist and fill a form. Check back from time to time to see if you've gained access</li>
              <li>To create your video from the dashboard, navigate to your app and then click the <strong>New Video<strong> button.</li>
              <li>Enter a your video url or drang and drop the video.</li>
              <li>The video may take some time to upload. However do not close the window so that your upload does not cancel.</li>
              </ol>
             `,
    img: q7,
    question:
      "Did you upload a video to the Theta Video API and get a playable link to add to your site?",
    options: {
      1: { id: 1, value: "Yes I have!" },
      2: { id: 2, value: "No I haven't" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
  {
    id: 1,
    title: "Theta's NFT DRM Technology",
    subtitle:
      "Empowering content creators with blockchain-based Digital Rights Management",
    summary:
      "Theta launches its NFT DRM (Digital Rights Management) technology, first utilized in a video Q&A session with OpenTheta and Theta Labs. The technology allows creators direct control over content distribution, ensuring access to content is verifiable and irrevocable on-chain via an immutable NFT. This safeguards creators and verifies only those who acquire the correct NFT have access to the content. This technology has diverse potential, including virtual ticket sales for livestreams or pay-per-view events.",
    img: q8,
    question: "What is the primary function of Theta's new NFT DRM technology?",
    options: {
      1: { id: 1, value: "To increase the speed of transactions" },
      2: {
        id: 2,
        value:
          "To give content creators direct control over content distribution",
      },
      3: { id: 3, value: "To facilitate anonymous transactions" },
    },
    answer: 2,
    classes: "lg:w-full",
  },
];

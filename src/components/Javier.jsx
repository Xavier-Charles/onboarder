import { useState } from "react";
import { twMerge } from "tailwind-merge";

const handleSearch = async (value, setResponse) => {
  const response = await fetch(
    "https://onboarder-jav.vercel.app/ask-question",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ question: value }),
    }
  );

  const { data } = await response.json();
  setResponse(data.text);
};

const SearchSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-search"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#c8c8d4"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
  </svg>
);

const CloseSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-x"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#e6bebe"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const Javier = () => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  return (
    <div className="fixed bottom-8 right-0">
      <div
        className={twMerge(
          "flex relative flex-col items-end mb-2",
          response === "" && "hidden"
        )}
      >
        <span
          onClick={() => setResponse("")}
          className="absolute top-2 right-3 cursor-pointer"
        >
          <CloseSVG />
        </span>
        <p className="text-sm w-[215px] text-slate p-4 pt-7 mr-2 bg-jetbrown rounded-md">
          {response}
        </p>
      </div>
      <label
        htmlFor="search"
        className="block text-sm font-semibold text-slate leading-6"
      >
        Ask Javier
      </label>
      <div className="relative mt-0.5 flex items-center w-[215px]">
        <input
          type="text"
          name="search"
          placeholder="Hey J what is..."
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full bg-jetbrown rounded-md border-0 py-1.5 pr-14 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd
            onClick={() => handleSearch(value, setResponse)}
            className="cursor-pointer inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-slate"
          >
            <SearchSVG />
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default Javier;

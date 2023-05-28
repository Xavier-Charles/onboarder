import moment from "moment";
import clsx from "clsx";
import { Link } from "@reach/router";
import { questsList } from "../api/mockData/allQuests";

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

const Quests = () => {
  return (
    <section
      id="hero"
      aria-label="Seamlessly Onboard to Web3 Products and Protocols"
      className="relative overflow-hidden bg-oxford py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[280px] text-center">
          <h2 className="text-3xl relative font-bold tracking-tight text-magwhite sm:text-4xl">
            <SwirlyDoodle className="absolute mt-2 left-0 top-1/2 h-[1em] w-full fill-pink/70" />
            <span className="relative">Live Quests</span>
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {questsList.map((quest) => (
            <article
              key={quest.id}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={quest.img}
                alt={quest.title}
                className={clsx(
                  "absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out",
                  quest.imgPos
                )}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"></div>
              <div
                className={clsx(
                  "absolute inset-0 -z-10 bg-gradient-to-t via-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",
                  `from-[${quest.colors[0]}]`
                )}
              ></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2020-03-16" className="mr-8">
                  {moment(quest.start).format("MMM D")} -{" "}
                  {moment(quest.end).format("MMM D, YYYY")}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {quest.commingSoon ? (
                  <span>{quest.title} (soon)</span>
                ) : (
                  <Link to={`/q/${quest.slug}`}>
                    <span className="absolute inset-0"></span>
                    {quest.title}
                  </Link>
                )}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quests;

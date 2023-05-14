import clsx from "clsx";
import CompletedCheckBox from "./CompletedCheckBox";

const CardNav = ({ showCardQA, setShowCardQA, isCompleted, type }) => {
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="divide-y divide-jetbrown/30 rounded-md border border-jetbrown/30 md:flex md:divide-y-0"
      >
        <li className="cursor-pointer relative md:flex md:flex-1">
          {/* <!-- Current Step --> */}
          <div
            className="flex items-center px-6 py-4 text-sm font-medium"
            aria-current="step"
            onClick={() => setShowCardQA(false)}
          >
            <span
              className={clsx(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2",
                showCardQA ? "border-gray-500" : "border-teal"
              )}
            >
              <span
                className={clsx(showCardQA ? "text-gray-600" : "text-teal")}
              >
                02
              </span>
            </span>
            <span
              className={clsx(
                "ml-4 text-sm font-medium",
                showCardQA ? "text-gray-600" : "text-teal"
              )}
            >
              Details
            </span>
          </div>
          {/* <!-- Arrow separator for lg screens and up --> */}
          <div
            className="absolute right-0 top-0 hidden h-full w-5 md:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full text-jetbrown/30"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vectorEffect="non-scaling-stroke"
                stroke="currentcolor"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>
        <li className="cursor-pointer relative md:flex md:flex-1">
          {/* <!-- Upcoming Step --> */}
          <div
            onClick={() => setShowCardQA(true)}
            className="group flex items-center"
          >
            <span className="flex items-center px-6 py-4 text-sm font-medium">
              {isCompleted ? (
                <CompletedCheckBox classes="h-6 w-6" />
              ) : (
                <span
                  className={clsx(
                    "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2",
                    showCardQA
                      ? "border-teal"
                      : "border-jetbrown/30 group-hover:border-gray-400"
                  )}
                >
                  <span
                    className={clsx(
                      showCardQA
                        ? "text-teal"
                        : "text-gray-600 group-hover:text-gray-900"
                    )}
                  >
                    03
                  </span>
                </span>
              )}
              <span
                className={clsx(
                  "ml-4 text-sm font-medium",
                  showCardQA
                    ? "text-teal"
                    : "text-gray-600 group-hover:text-gray-900"
                )}
              >
                {type?.includes("verify") ? "Verify" : "Q & A"}
              </span>
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default CardNav;

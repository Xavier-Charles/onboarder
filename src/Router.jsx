import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Quest from "./pages/Quest";

function Router() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/q/bnb-greenfield",
      element: <Quest />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default Router;

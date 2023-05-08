import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence,motion } from "framer-motion";
import Quest from "./pages/Quest";
import { useState } from "react";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

const RootContainer = () => {
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <AnimatedOutlet />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-teal"
        />
      </div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    element: <RootContainer />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/q/:slug",
        element: <Quest />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

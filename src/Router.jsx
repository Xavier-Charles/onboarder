
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Quest from "./pages/Quest";
import { Router, Location } from "@reach/router";

const FramerRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div style={{ position: "relative" }}>
        <AnimatePresence initial={false}>
          <Router key={location.key} location={location}>
            {children}
          </Router>
        </AnimatePresence>
      </div>
    )}
  </Location>
);

function AppRouter() {
  return (
    <FramerRouter>
      <Home path="/" />
      <Quest path="/q/:slug" />
    </FramerRouter>
  );
}

export default AppRouter;

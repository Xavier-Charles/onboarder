import { useEffect } from "react";
import { scrollToTop } from "../utils/scrollTo";


export default () => {
  useEffect(() => {
    scrollToTop();
  }, []);
}

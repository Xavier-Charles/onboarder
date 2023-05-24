import { useMemo } from "react";
import { useParams } from "@reach/router";
import CONFIG from "../config";

export default () => {
  const params = useParams();
  const PARTNER_CONFIG = useMemo(
    () => CONFIG.PARTNERS_CONFIG.find((partner) => partner.SLUG === params?.slug),
    [params?.slug]
  );
  return PARTNER_CONFIG;
};

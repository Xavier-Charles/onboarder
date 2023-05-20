import { useMemo } from "react";
import { useParams } from "@reach/router";
import CONFIG from "../config";

export default () => {
  const { slug } = useParams();
  const PARTNER_CONFIG = useMemo(
    () => CONFIG.PARTNERS_CONFIG.find((partner) => partner.SLUG === slug),
    [slug]
  );
  console.log(slug, PARTNER_CONFIG);
  return PARTNER_CONFIG;
};

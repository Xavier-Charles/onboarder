import { Helmet } from "react-helmet";
import TransitionAnimation from "../components/transitions/TransitionAnimationX";
import { Header } from "../components/Header";
import useScrollToTop from "../hooks/useScrollToTop";
import usePartner from "../hooks/usePartner";

const Quest = () => {
  useScrollToTop();
  const PARTNER_CONFIG = usePartner();

  if (!PARTNER_CONFIG) {
    return <div>404</div>;
  }

  const {
    SLUG,
    SEO: { TITLE, DESCRIPTION },
    COMPONENTS: { HERO },
  } = PARTNER_CONFIG;

  return (
    <section>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <Header />
      <HERO slug={SLUG} />
      <TransitionAnimation />
    </section>
  );
};

export default Quest;

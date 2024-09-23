import AboutSection from "./sections/howwework/howwework";
import BgVideo from "./sections/banner/bgVideo";
import HowItWorksSection from "./sections/whysat/WhySat";
import ReviewsSection from "./sections/reviews/reviews";
import Fleet from "./sections/fleet/fleet";
import HowWeWork from "./sections/howwework/howwework";
import JoinTaxiTeam from "./sections/joinsatteam/joinsatteam";
import ClientCarousel from "./sections/client_carousel/clientCarousel";
import MarqueeComponent from "./sections/marquee/Marquee";

const HomeScreen = () => {
  return (
    <main>
      <BgVideo />
      <MarqueeComponent />
      <HowWeWork />
      <Fleet />
      <HowItWorksSection />
      <JoinTaxiTeam />
      <ReviewsSection />
      <ClientCarousel />
    </main>
  );
};

export default HomeScreen;

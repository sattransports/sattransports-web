import BgVideo from "./sections/bg_video/bg_Video";
import WhySat from "./sections/why_sat/why_sat";
import ReviewsSection from "./sections/reviews/reviews";
import Fleet from "./sections/fleet/fleet";
import HowWeWork from "./sections/how_we_work/how_we_work";
import JoinTaxiTeam from "./sections/join_sat_team/join_sat_team";
import ClientCarousel from "./sections/client_carousel/client_carousel";
import MarqueeComponent from "./sections/marquee/marquee";

// HomeScreen component displays various sections of the home page.
const HomeScreen = () => {
  return (
    <main>
      {/* Background Video */}
      <BgVideo />

      {/* Marquee for moving text */}
      <MarqueeComponent />

      {/* Section describing how the company works */}
      <HowWeWork />

      {/* Fleet information */}
      <Fleet />

      {/* Reasons to choose SAT */}
      <WhySat />

      {/* Call to action to join the SAT Taxi team */}
      <JoinTaxiTeam />

      {/* Customer reviews section */}
      <ReviewsSection />

      {/* Client logos carousel */}
      <ClientCarousel />
    </main>
  );
};

export default HomeScreen;

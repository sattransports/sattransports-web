const {
  default: SocialMedia,
} = require("@/components/social_media/social_media");
const {
  default: CustomButton,
} = require("@/components/ui/custom_button/custom_button");
const { default: Link } = require("next/link");
const { Image } = require("react-bootstrap");
const { StarFill } = require("react-bootstrap-icons");

const riderServices = [
  {
    id: "rs1",
    head: "Drive unlimited with a daily subscription—earn more, every day!",
    img: "raido_stars_logo",
    noMargin: true,
    text: (
      <>
        <p>
          At Raido, we revolutionize the way you experience bike taxi and auto
          rides with our unique, driver-centric approach. We understand the
          challenges faced by drivers and aim to provide a platform that truly
          supports their growth and success. Here’s how we empower our Raido
          Stars.
        </p>
        <br />
        <h4>Why Choose Raido?</h4>
        <ul>
          <li>
            <span>
              <h5>Driver-Centric Approach: </h5>Your earnings are our priority.
            </span>
          </li>
          <li>
            <span>
              <h5>Transparency: </h5>No hidden charges, no surprises.
            </span>
          </li>
          <li>
            <span>
              <h5>Supportive Community: </h5>Be part of a network that values
              and supports its drivers.
            </span>
          </li>
        </ul>

        <p>
          Ready to ride with Raido? Download our app now and start your journey
          as a Rider Star!
        </p>
      </>
    ),
    cta: (
      <Link href="/">
        <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
      </Link>
    ),
  },
  {
    id: "rs2",
    head: "0% Commission on Rides",
    img: "comm",
    // noMargin: true,
    text: "We believe in fair earnings for all our Raido Stars. That’s why Raido charges absolutely zero commission on rides. Every penny you earn from your rides is yours to keep. By eliminating commission fees, we ensure that your hard work pays off directly.",
    cta: <CustomButton>Contact Us Now</CustomButton>,
  },

  {
    id: "rs3",
    head: "Earn What You Drive",
    img: "earn",
    text: "With Raido, there are no hidden charges eating into your profits. Our transparent model guarantees that what you drive is what you earn. You won’t be surprised by unexpected deductions, allowing you to manage your finances with confidence.",
    cta: <SocialMedia variant={2} />,
  },
  {
    id: "rs4",
    head: "Simple Subscription Model",
    img: "auto1",
    noMargin: true,
    text: "Starting your journey with Raido is easy and straightforward. Instead of paying recurring commissions or dealing with complex fee structures, you simply subscribe to our application. Pay a fixed amount when you start your first ride and enjoy unlimited earning potential. Our subscription model is designed to provide maximum benefit with minimal hassle.",
    cta: (
      <CustomButton>
        <p>Rate us</p>
        <StarFill />
        <StarFill />
        <StarFill />
        <StarFill />
        <StarFill />
      </CustomButton>
    ),
  },
];

const cabServices = [
  {
    id: "cs1",
    head: "Most Affordable Bike Taxi and Auto Booking",
    img: "hero2",
    text: (
      <>
        <p>
          At Raido, we make commuting affordable and convenient in Chennai. Our
          bike and auto taxi services are designed to offer the lowest rates
          around. Whether you're heading to work or exploring the city, we
          ensure you travel without high costs. With clear and transparent
          pricing, there are no hidden fees.{" "}
          <strong>
            Bike taxi owners pay just 20 INR per day, while auto taxi owners pay
            30 INR per day.
          </strong>{" "}
          Enjoy unlimited rides with zero commission, meaning all your earnings
          stay with you. Choose Raido for an economical and efficient travel
          experience, and keep more of what you earn.
        </p>
      </>
    ),
    cta: <SocialMedia variant={2} />,
    noMargin: true,
  },
  {
    id: "cs2",
    head: "You Safety is Our First Concern",
    img: "safety",
    text: "Your safety is our top priority at Raido. We go above and beyond to ensure that every ride is secure and comfortable. Our drivers undergo rigorous background checks and training programs to guarantee a safe journey. All our vehicles are regularly inspected and maintained to the highest standards. Additionally, we provide in-app safety features such as emergency contacts and SOS buttons to give you peace of mind while you travel. With Raido, you can trust that your well-being is always our foremost concern, allowing you to ride confidently and securely.",
    cta: <SocialMedia variant={2} />,
    // noMargin:true
  },
  {
    id: "cs3",
    head: "Every Ride is Insured",
    img: "insurance",
    text: "Travel with confidence knowing that every ride you take with Raido is fully insured. We prioritize your security by providing comprehensive insurance coverage for all our rides. This means that in the unlikely event of an accident or mishap, you are protected. Our commitment to your safety extends beyond just providing a secure ride; it includes ensuring financial protection and peace of mind. With Raido, you can relax and enjoy your journey, knowing that you are safeguarded at all times. Choose Raido for a worry-free travel experience where your safety and well-being are our utmost priority.",
    cta: <SocialMedia variant={2} />,
    noMargin: true,
  },
  {
    id: "cs4",
    head: "GPS Tracking and Real-Time Notifications",
    img: "navigation",
    text: "Stay connected and informed with Raido’s advanced GPS tracking and real-time notifications. Our app offers precise GPS tracking, allowing you to monitor your ride’s progress and location from start to finish. You’ll receive instant notifications about your driver’s arrival, trip status, and estimated time of arrival. This feature not only enhances your safety but also ensures you are always aware of your ride’s status, minimizing wait times and optimizing your travel schedule. With Raido, you’re always in the know, making your commute more predictable and stress-free.",
    cta: <SocialMedia variant={2} />,
    noMargin: true,
  },
  {
    id: "cs5",
    head: "User-Friendly Interface",
    img: "ui",
    text: "Raido’s app is designed with you in mind. Our user-friendly interface ensures that booking a ride is quick, simple, and hassle-free. Whether you’re a tech-savvy user or someone who prefers straightforward navigation, our app caters to all. With intuitive features, clear instructions, and easy access to all functionalities, Raido makes ride booking a breeze. You can effortlessly choose your vehicle type, track your ride, and manage your bookings all in one place. Experience the convenience of a seamlessly designed app that puts your needs first, making your travel experience smoother and more enjoyable.",
    cta: <SocialMedia variant={2} />,
    noMargin: true,
  },
];

const schoolServices = [
  {
    id: "sc1",
    head: "Safe, Efficient, and Reliable School Rides",
    img: "school1",
    noMargin: true,

    text: (
      <>
        <p>
          Welcome to Raido School, the ultimate solution for managing school
          rides. Our service ensures the safety and convenience of students
          during their daily commute, offering real-time tracking,
          notifications, and a user-friendly interface for parents, schools, and
          drivers. Join our subscription model to enjoy seamless school
          transportation with peace of mind.
        </p>
        <br />
        <h4>We Believe In</h4>
        <ul>
          <li>
            <span>
              <h5>Safety First: </h5>Ensure your child&apos;s safety with
              real-time tracking and instant notifications.
            </span>
          </li>
          <li>
            <span>
              <h5>Peace of Mind: </h5>Stay informed about your child&apos;s
              commute from start to finish.
            </span>
          </li>
          <li>
            <span>
              <h5>Convenience: </h5>Easy-to-use app for both parents and
              drivers.
            </span>
          </li>
          <li>
            <span>
              <h5>Reliability: </h5>Accurate and timely updates for every ride.
            </span>
          </li>
          <li>
            <span>
              <h5>Flexibility: </h5>Subscription plans to suit your needs.
            </span>
          </li>
        </ul>
      </>
    ),
    cta: (
      <Link href="/">
        <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
      </Link>
    ),
  },
  {
    id: "sc2",
    head: " Student Boarding Status & Tracking",
    img: "school2",
    noMargin: true,

    text: "Track each student’s boarding status with ease. Our drivers use a slide button to confirm when a student boards the vehicle and when they reach their destination which tracks each and every actions when the children are with us. Parents can monitor the ride in real-time via GPS and can view the exact location of the school vehicle on a map at any time.",
    cta: (
      <Link href="/">
        <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
      </Link>
    ),
  },
  {
    id: "sc3",
    head: "GPS Monitoring and Push Notifications",
    img: "school3",
    noMargin: true,

    text: "Integrated GPS tracking allows parents to view the school vehicle's route which allow them to stay informed of any delays or changes in the route. Parents receive push notifications when their child is on-boarded and get alerts when the student reaches the school and when they are picked up for the return trip. which ensure your child's safety and whereabouts at all times.",
    cta: (
      <Link href="/">
        <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
      </Link>
    ),
  },
  {
    id: "sc6",
    head: "Every Ride is Insured",
    img: "insurance",
    text: "Travel with confidence knowing that every ride you take with Raido is fully insured. We prioritize your security by providing comprehensive insurance coverage for all our rides. This means that in the unlikely event of an accident or mishap, you are protected. Our commitment to your safety extends beyond just providing a secure ride; it includes ensuring financial protection and peace of mind. With Raido, you can relax and enjoy your journey, knowing that you are safeguarded at all times. Choose Raido for a worry-free travel experience where your safety and well-being are our utmost priority.",
    cta: <SocialMedia variant={2} />,
    noMargin: true,
  },
  {
    id: "sc4",
    head: "Subscription Model",
    img: "school4",
    noMargin: true,
    text: (
      <>
        <p>
          Enjoy Raido School&apos;s service through a convenient subscription
          model by choosing a plan that fits your needs and ensure continuous
          service for your child&apos;s school commute.
        </p>
        <br />
        <h4>Easy Steps to Safe School Rides</h4>
        <ul>
          <li>
            <span>Download our app on your smartphone.</span>
          </li>
          <li>
            <span>Set up your account and add your child&apos;s details.</span>
          </li>
          <li>
            <span>Choose a subscription plan that fits your needs.</span>
          </li>
          <li>
            <span>
              Ensure your child&apos;s safety with real-time tracking and
              instant notifications.
            </span>
          </li>
          <li>
            <span>
              Stay informed about your child&apos;s commute from start to
              finish.
            </span>
          </li>
        </ul>
      </>
    ),
    cta: (
      <Link href="/">
        <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
      </Link>
    ),
  },
];

const TABS = [
  {
    id: "t1",
    name: "Bikes and Autos",
    services: cabServices,
    caption:
      "Discover the ultimate in affordable and safe transportation with Raido in Chennai. Enjoy the cheapest bike taxi and auto booking services, complete with real-time GPS tracking and instant notifications. Our user-friendly app ensures a seamless booking experience, while comprehensive ride insurance provides peace of mind. Ride confidently, knowing your safety is our top priority with Raido.",
  },
  {
    id: "t2",
    name: "Raido School",
    services: schoolServices,
    caption: "",
  },
  {
    id: "t3",
    name: "For Raido Stars",
    services: riderServices,
    caption:
      "Starting your journey with Raido is easy and straightforward. Instead of paying recurring commissions or dealing with complex fee structures, you simply subscribe to our application. Pay a fixed amount when you start your first ride and enjoy unlimited earning potential. Our subscription model is designed to provide maximum benefit with minimal hassle.",
  },
];

export default TABS;

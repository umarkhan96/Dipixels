import Head from "next/head";
import Banner from "./compnents/Banner/Banner";
import Aboutus from "./compnents/Aboutus/Aboutus";
import Layout from "./compnents/Layout/Layout";
import FeaturedProject from "./compnents/FeaturedProject/FeaturedProject";
import OurServices from "./compnents/OurServices/OurServices";
import DesignSolutions from "./compnents/DesignSolutions/DesignSolutions";
import ScrollBrands from "./compnents/Scroll/ScrollBrands";
import ScrollHeadings from "./compnents/Scroll/ScrollHeadings";
import useScrollPercentage from "./compnents/Hooks/useScrollPercentage";

const projectData = [
  {
    title: "712 Creative website",
    subtitle: "Redesign & Development",
    description:
      "To increase website engagement, the best way is to provide your users with stand-out UI/UX designs. A good user interface and experience will not only make your users happy, but also benefit you in making a distinctive business identity.",
    heading: "Design & Development",
  },
  {
    title: "Innovative Mobile Apps",
    subtitle: "Redesign & Development",
    description:
      "DiPixels enlightens to provide you with a slick, smooth, and responsive user interface while significantly reducing load time. We stuff your business with faster and cheaper ways to build apps in React Native.",
    heading: "Mobile App Development",
  },
  {
    title: "Innovative Logo Designs",
    subtitle: "Logo Designing",
    description:
      "Create your brand’s identity with unique and attractive corporate design that define your purpose. Here’s our corporate design portfolio that showcases our most recent work.",
    heading: "Logo Design",
  },
  {
    title: "Video animation and ",
    subtitle: "Production",
    description:
      "At Dipixels, we bring you the most advanced and promising video animation technology and production. Our work speaks more than anything. Visit our portfolio and convince yourself of our incredible work.",
    heading: "Video Animation",
  },
];

const Home = () => {
  const scrollPercentage = useScrollPercentage();
  console.log(Math.round(scrollPercentage.toFixed(1)), ":pppp");

  return (
    <div
    // ref={scrollRef}
    >
      <Head>
        <title>Dipixels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Banner />
        {/* <Aboutus /> */}
        <FeaturedProject
          data={projectData}
          marqueeText="Featured Projects"
          heading={<h1>Featured Projects</h1>}
        />
        <OurServices />
        <DesignSolutions />
        <ScrollBrands />
        <ScrollHeadings />
      </Layout>
    </div>
  );
};

export default Home;

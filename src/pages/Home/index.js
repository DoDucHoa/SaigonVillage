import Banner from "../../components/Menhome/Banner";
import Offer from "../../components/Menhome/Offer";
// import Story from "../../components/Menhome/Story";
// import Specialdish from "../../components/Menhome/Specialdish";
// import MenuSection from "../../components/Menhome/MenuSection";
// import Whyus from "../../components/Menhome/Whyus";
// import Special from "../../components/Menhome/Special";
import Contact from "../../components/Menhome/Contact";
import { withHeader } from "../../hoc/withHeader";

function Home() {
  return (
    <>
      <Banner />
      <Offer />
      {/* <Story /> */}
      {/* <Specialdish /> */}
      {/* <MenuSection /> */}
      {/* <Special /> */}
      <Contact />
      {/* <Whyus /> */}
      {/* <ChefSection /> */}
      {/* <Videosection /> */}
      {/* <NewsSection /> */}
    </>
  );
}

export default withHeader(Home);

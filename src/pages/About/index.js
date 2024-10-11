import Aboutsec from "../../components/Menabout/Aboutsec";
import Aboutservice from "../../components/Menabout/Aboutservice";
import Aboutwhyus from "../../components/Menabout/Aboutwhyus";
import Sliderabout from "../../components/Menabout/Sliderabout";
import Testimonialsabout from "../../components/Menabout/Testimonialsabout";
import Winningchef from "../../components/Menabout/Winningchef";
import Bredcrumb from "../../components/Bredcrumb/Main";
import Img from "../../assets/images/background/banner-image-1.jpg";
import { withHeader } from "../../hoc/withHeader";

function About() {
  return (
    <>
      <Bredcrumb subtitle="About Us" title="OUR STORY" Img={Img} />
      <Aboutsec />
      <Winningchef />
      <Aboutservice />
      <Testimonialsabout />
      <Aboutwhyus />
      <Sliderabout />
    </>
  );
}
export default withHeader(About);

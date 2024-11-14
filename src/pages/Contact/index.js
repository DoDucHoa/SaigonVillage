import Contactbanner from "../../components/Mencontactus/Contactbanner";
import Bredcrumb from "../../components/Bredcrumb/Main";
import Img from "../../assets/images/background/Restaurant1.jpg";
import { withHeader } from "../../hoc/withHeader";

function Contact() {
  return (
    <>
      <Bredcrumb title="ANY QUERY ?" subtitle="Contact Us" Img={Img} />
      <Contactbanner />
    </>
  );
}

export default withHeader(Contact);

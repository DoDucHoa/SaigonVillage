import Contactbanner from "../../components/Mencontactus/Contactbanner";
import Bredcrumb from "../../components/Bredcrumb/Main";
import Img from "../../assets/images/background/Restaurant1.jpg";
import { withHeader } from "../../hoc/withHeader";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Bredcrumb
        title={t("contact.question")}
        subtitle={t("contact.contact")}
        Img={Img}
      />
      <Contactbanner />
    </>
  );
}

export default withHeader(Contact);

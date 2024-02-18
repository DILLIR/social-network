import { useTranslation } from "react-i18next";

function AboutPage() {
   const {t} = useTranslation('about');

   return (
      <div>
         <h1>{t("ABOUT PAGE")}</h1>
      </div>
   );
}

export default AboutPage;
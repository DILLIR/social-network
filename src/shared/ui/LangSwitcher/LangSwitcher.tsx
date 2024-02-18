import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

export function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
  };

  return (
    <button
      className={classNames("", {}, [])}
      onClick={toggleLanguage}
    >
      {t("Translate")}
    </button>
  );
}

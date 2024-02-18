import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

export function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
  };

  return (
    <button
      className={classNames(cls.LangSwitcher, {}, [])}
      onClick={toggleLanguage}
    >
      {t("Translate")}
    </button>
  );
}

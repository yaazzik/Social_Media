import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}
export const LanguageSwitcher = ({className}:LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  };

  return (
      <Button
        className={classNames(cls.LanguageSwitcher, {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={toggleLanguage}>
          {t("Выбор языка")}
      </Button>
  );
};

import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/LightThemeIcon.svg'
import DarkIcon from 'shared/assets/icons/DarkThemeIcon.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {

  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === 'light' ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

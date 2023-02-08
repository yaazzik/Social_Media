import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {FC} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
}

export enum ButtonTheme {
  CLEAR = 'clear',
}

export const Button: FC<ButtonProps> = (props) => {

  const {
    className,
    children,
    theme,
    ...rest
  } = props

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};

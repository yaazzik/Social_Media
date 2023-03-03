import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';

export enum SpinnerTheme {
    PRIMARY = 'ldsDualRingPrimary',
    SECONDARY = 'ldsDualRingSecondary'
}
interface SpinnerProps {
  className?: string;
  theme?: SpinnerTheme;
}
export const Spinner = ({ className, theme = SpinnerTheme.PRIMARY }:SpinnerProps) => (
    <div className={classNames(cls[theme], {}, [className])} />
);

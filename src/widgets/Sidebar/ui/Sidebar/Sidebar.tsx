import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={onToggle}> TOGGLE </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

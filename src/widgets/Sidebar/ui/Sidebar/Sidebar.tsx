import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/item';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_SECONDARY}
                size={ButtonSize.M}
                onClick={onToggle}
                className={cls.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.content}>
                {SidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />)}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
});

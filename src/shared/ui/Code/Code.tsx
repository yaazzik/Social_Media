import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, ReactNode, useCallback, useState,
} from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/icons/Copy.svg';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        children,
    } = props;

    const { t } = useTranslation('ArticleDetailsPage');
    const [isCopied, setIsCopied] = useState(false);

    const copyText = useCallback(() => {
        navigator.clipboard.writeText(String(children));
        setIsCopied((prevState) => !prevState);
    }, [children]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} onClick={copyText} theme={ButtonTheme.CLEAR}>
                {isCopied && <p className={cls.copied}>{t('Скопировано!')}</p>}
                <Icon Svg={CopyIcon} className={cls.icon} />
            </Button>
            <p className={cls.text}>
                {children}
            </p>
        </pre>

    );
});

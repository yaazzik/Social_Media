import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так.')}</h1>
            <Button
                theme={
                    ButtonTheme.OUTLINE
                }
                className={cls.reloadBtn}
                type="button"
                onClick={() => window.location.reload()}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

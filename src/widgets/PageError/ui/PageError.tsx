import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так.')}</h1>
            <button type="button" onClick={() => window.location.reload()}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};

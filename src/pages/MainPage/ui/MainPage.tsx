import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;

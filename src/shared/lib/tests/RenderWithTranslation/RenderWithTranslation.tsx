import i18nJest from 'shared/config/i18n/i18nJest';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { render } from '@testing-library/react';

const renderWithTranslation = (component: React.ReactNode) => render(
    <I18nextProvider i18n={i18nJest}>
        {component}
    </I18nextProvider>,
);

export default renderWithTranslation;

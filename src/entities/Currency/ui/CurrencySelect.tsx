import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from 'entities/Currency';
import cls from './CountrySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props:CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((val?: string) => {
        onChange?.(val as Currency);
    }, [onChange]);

    const currencies = useMemo(
        () => Object.entries(Currency).map((cur) => ({ value: cur[0], content: cur[1] })),
        [],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            options={currencies}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

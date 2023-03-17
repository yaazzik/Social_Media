import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props:CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((val?: string) => {
        onChange?.(val as Country);
    }, [onChange]);

    const countries = useMemo(
        () => Object.entries(Country).map((country) => ({ value: country[0], content: country[1] })),
        [],
    );

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Страна')}
            options={countries}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

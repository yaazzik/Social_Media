import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

interface SelectOpiton {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOpiton[];
    value?: string;
    onChange?: (value?: string) => void;
    readonly?: boolean;
}

export const Select = memo((props:SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => options?.map((val) => (
        <option
            className={cls.option}
            value={val.value}
            key={val.value}
        >
            {val.content}
        </option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }, [onChange]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});

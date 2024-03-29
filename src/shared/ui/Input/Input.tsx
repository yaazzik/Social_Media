import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean
}
export const Input = memo((props:InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = React.useState(false);
    const [caretPosition, setCaretPosition] = React.useState(0);

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const ref = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelectHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setCaretPosition(target.selectionStart || 0);
    };

    const INPUT_MAX_LENGTH = 21;

    const isCaretVisible = isFocused && !readonly;

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder
                && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    className={classNames(cls.Input, {}, [className, cls.readonly])}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    readOnly={readonly}
                    {...rest}
                />
                { isCaretVisible
                    && (
                        <span
                            className={cls.caret}
                            style={{
                                left: `${caretPosition <= INPUT_MAX_LENGTH
                                    ? caretPosition
                                    : INPUT_MAX_LENGTH}ch`,
                            }}
                        />
                    ) }
            </div>
        </div>
    );
});

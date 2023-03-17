import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props:ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profilePage');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('Профиль пользователя')} />
            {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onSaveEdit}
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.cancelEditBtn}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                    </>

                )}
        </div>
    );
};

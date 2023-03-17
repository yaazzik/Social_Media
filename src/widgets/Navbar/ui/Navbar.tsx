import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {authData
                    ? (
                        <Button
                            onClick={onLogout}
                            theme={ButtonTheme.CLEAR}
                        >
                            {t('Выйти')}
                        </Button>
                    )
                    : (
                        <div>
                            <Button
                                onClick={onShowModal}
                                theme={ButtonTheme.CLEAR}
                            >
                                {t('Войти')}
                            </Button>
                            {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
                        </div>

                    )}

            </div>
        </div>
    );
});

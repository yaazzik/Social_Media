import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Spinner, SpinnerTheme } from 'shared/ui/Spinner/Spinner';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }:LoginModalProps) => (
    <Modal
        lazy
        onClose={onClose}
        isOpen={isOpen}
        className={classNames('', {}, [className])}
    >
        <Suspense fallback={<Spinner theme={SpinnerTheme.SECONDARY} />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);

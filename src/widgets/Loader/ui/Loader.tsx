import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import React from 'react';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames('Loader', {}, [className])}>
        <Spinner />
    </div>
);

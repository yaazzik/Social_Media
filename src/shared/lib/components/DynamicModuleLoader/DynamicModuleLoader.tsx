import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StoreWithReducerManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKeys]?: Reducer;
}

interface DynamicModuleLoaderProps {
    name?: StateSchemaKeys;
    reducers: ReducerList;
    removeOnUnmount?: boolean;
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        name,
        reducers,
        removeOnUnmount = true,
    } = props;
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line
        <>
            { children }
        </>

    );
};

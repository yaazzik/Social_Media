import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManagerSchema, StateSchema, StateSchemaKeys } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManagerSchema {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKeys> = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
//
// const staticReducers = {
//     users: usersReducer,
//     posts: postsReducer,
// };
//
// export function configureStore(initialState) {
//     const reducerManager = createReducerManager(staticReducers);
//
//     // Create a store with the root reducer function being the one exposed by the manager.
//     const store = createStore(reducerManager.reduce, initialState);
//
//     // Optional: Put the reducer manager on the store so it is easily accessible
//     store.reducerManager = reducerManager;
// }

import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('increment', () => {
        const store: CounterSchema = { value: 10 };
        expect(counterReducer(store as CounterSchema, counterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('decrement', () => {
        const store: CounterSchema = { value: 10 };
        expect(counterReducer(store as CounterSchema, counterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('store to have initial state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});

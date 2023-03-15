import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('to return object counter', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});

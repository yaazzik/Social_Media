import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            <h1 data-testid="counter-value">{counterValue}</h1>
            <Button
                data-testid="counter-increment"
                theme={ButtonTheme.BACKGROUND_SECONDARY}
                onClick={increment}
            >
                increment
            </Button>
            <br />
            <Button
                data-testid="counter-decrement"
                theme={ButtonTheme.BACKGROUND_SECONDARY}
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};

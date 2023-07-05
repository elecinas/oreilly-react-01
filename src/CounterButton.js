import React, { useEffect } from "react";
import { Button } from './Button';

export const CounterButton = ({onIncrement, numberOfClicks}) => {
    console.log('CounterButton rendering!')
    useEffect(() => {
        console.log('useEffect function called!');
        return () => console.log('unmounting');
    }, []);
    return(
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <Button buttonColor="red" onClick={onIncrement}>Click me!</Button>
        </>
    );
}
import React, { useEffect } from "react";
import { DangerButton } from './Button';

export const CounterButton = ({onIncrement, numberOfClicks}) => {
    console.log('CounterButton rendering!')
    useEffect(() => {
        console.log('useEffect function called!');
        return () => console.log('unmounting');
    }, []);
    return(
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <DangerButton buttonColor="red" onClick={onIncrement}>Click me!</DangerButton>
        </>
    );
}
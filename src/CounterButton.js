import React, { useEffect } from "react";

export const CounterButton = ({onIncrement, numberOfClicks}) => {
    console.log('CounterButton rendering!')
    useEffect(() => {
        console.log('useEffect function called!');
        return () => console.log('unmounting');
    }, []);
    return(
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click me!</button>
        </>
    );
}
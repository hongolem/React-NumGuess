import React, {useRef} from "react";

export const Input = ({setValue, setDone, setAttempts, num, hidden, setHighOrLow}: {
    setValue: React.Dispatch<React.SetStateAction<number>>,
    setDone: React.Dispatch<React.SetStateAction<boolean>>,
    setAttempts: React.Dispatch<React.SetStateAction<number>>,
    num: number,
    hidden: number,
    setHighOrLow: React.Dispatch<React.SetStateAction<string>>}) => {
    let inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <div>
                <label htmlFor="number">Hodnota</label>
                <input type="number" id="number" ref={inputRef} onChange={() => {
                    if (inputRef.current) {
                        setValue(parseInt(inputRef.current.value));
                    }
                }}/>
            </div>
            <button onClick={() => {
                setAttempts(prev => prev + 1);
                if (num == hidden) {
                    setDone(true);
                } else if (num > hidden) {
                    setHighOrLow("Méně");
                } else if (num < hidden) {
                    setHighOrLow("Více");
                }
            }}>Hádej</button>
        </>
    )
}

import React, { useState } from "react";
import style from './App.module.css';
import { data } from './Api';

function App() {
    let len = data.length - 1;
    const [count, setCount] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0)

    function handleOnClick(isCorrect) {
        if (isCorrect) {
            alert('Correct answer');
            setCorrectAnswer(correctAnswer + 1)
        }
        if (count < len) {
            setCount(count + 1);
        }
        else {
            setShowResult(!showResult);
        }
    }

    return (
        <>
            {showResult ? (<h1 className={style.output}>You have scored {correctAnswer} out of {data.length}</h1>) :
                (
                    <div className={style.parent}>
                        <div className={style.box}>
                            <div className={style.question}>
                                <h1>Question {count + 1}/<span>8</span> </h1>
                                <p>{data[count].question}</p>
                            </div>
                            <div className={style.options}>
                                {data[count].options.map((val) =>
                                    <button onClick={() => handleOnClick(val.isCorrect)} className={style.opt}>{val.text}</button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default App;
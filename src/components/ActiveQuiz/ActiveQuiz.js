import React from 'react';
import style from './../ActiveQuiz/ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => {
    return (
        <div className={style.ActiveQuiz}>
            <p className={style.Question}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>
                <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
                />
        </div>
    )
}


export default ActiveQuiz;
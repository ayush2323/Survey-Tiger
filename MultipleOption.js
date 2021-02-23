import React, { useState, useEffect, useRef } from 'react'

const MultipleOption = (props) => {
    const [optionCount, setOptionCount] = useState(1)
    const [question, setQuestion] = useState('')
    const [firstvalue, setFirstValue] = useState('')
    const [secondvalue, setSecondValue] = useState('')
    const [thirdvalue, setthirdValue] = useState('')
    const [fourthvalue, setFourthValue] = useState('')
    const inputQuestionRef = useRef(null)
    const inputOptionRef = useRef(null)

    useEffect(() => {
        if ( firstvalue === '') {
            inputQuestionRef.current.focus()
        }
    })

    useEffect(() => {
        if (optionCount > 1) inputOptionRef.current.focus()
    }, [optionCount])

    const addOption = () => {
        if (optionCount !== 4) {
            setOptionCount(optionCount + 1)
        }
    }

    const renderSubmitButton = () => {
        if (optionCount === 4 && firstvalue !== "" && secondvalue !== "" && thirdvalue !== "" && fourthvalue !== "") {
            return (
                <div className="final_button">
                    <button onClick={() => props.multipleQuestion(question, firstvalue, secondvalue, thirdvalue, fourthvalue)} className="final_btn" >Add Question</button>
                    <button className="final_btn">Publish</button>
                </div>
            )
        } else return ''
    }

    const deleteOption = () => {
        if (optionCount > 1) {
            setOptionCount(optionCount - 1)
        }
    }

    const changeHandler = (e) => {
        if (e.target.id == 0) setFirstValue(e.target.value)
        else if (e.target.id == 1) setSecondValue(e.target.value)
        else if (e.target.id == 2) setthirdValue(e.target.value)
        else if (e.target.id == 3) setFourthValue(e.target.value)
    }

    const getValueIndex = (id) => {
        if (id === 0) return firstvalue
        if (id === 1) return secondvalue
        if (id === 2) return thirdvalue
        if (id === 3) return fourthvalue
    }

    const renderOption = () => {
        let options = []
        let i = 0
        while (i < optionCount) {
            let html =
                <div key={i} className="btn">
                    <input ref={inputOptionRef} id={i} value={getValueIndex(i)} onChange={changeHandler} className="input" type="text" />
                    <button onClick={deleteOption} className="questionBtn">-</button>
                    <button onClick={addOption} className="questionBtn">+</button>
                </div>
            options.push(html)
            i++
        }
        return options
    }

    const questionHandler = (e) => {
        setQuestion(e.target.value)
    }

    return (
        <div className="QuestionType">
            <label htmlFor="question">Question: <input ref={inputQuestionRef} value={question} onChange={questionHandler} className="input" type="text" /></label><br />
            <h2>Options: </h2>
            {renderOption()}
            {renderSubmitButton()}

        </div>
    )
}

export default MultipleOption

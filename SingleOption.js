import React, {useState, useEffect, useRef} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Publish from './Publish'

const SingleOption = (props) => {
    const [optionCount, setOptionCount] = useState(1)
    const [question, setQuestion] = useState('')
    const [firstvalue, setFirstValue] = useState('')
    const [secondvalue, setSecondValue] = useState('')
    // const [type, setType]
    const inputQuestionRef = useRef(null)
    const inputOptionRef = useRef(null)

    useEffect(() => {
        if(optionCount > 1) inputOptionRef.current.focus()
    }, [optionCount])

    useEffect(() => {
        if(firstvalue === '') {
            inputQuestionRef.current.focus()
        }
    })

    const renderOption = () => {
        let options = []
        let i = 0
        while(i < optionCount) {
            let html = 
                <div key={i} className="btn">
                    <input ref={inputOptionRef} id={i} value={getValueIndex(i)} onChange={changeHandler} className="input" type="text"/>
                    <button onClick={deleteOption} className="questionBtn">-</button>
                    <button onClick={addOption}className="questionBtn">+</button>
                </div>
            options.push(html)
            i++
        }
        return options
    }

    const getValueIndex = (id) => {
        if(id === 0) return firstvalue
        if(id === 1) return secondvalue
    }

    const changeHandler = (e) => {
        if(e.target.id == 0) setFirstValue(e.target.value)
        else if(e.target.id == 1) setSecondValue(e.target.value)
        else if(e.target.id == 2) setthirdValue(e.target.value)
        else if(e.target.id == 3) setFourthValue(e.target.value)
    }

    const deleteOption = () => {
        if(optionCount > 1) {
            setOptionCount(optionCount-1)
        }
    }

    const renderSubmitButton = () => {
        if(optionCount === 2 && firstvalue !== "" && secondvalue !== "") {
            return (
                <div className="final_button">
                    <button onClick={() => props.singleQuestion(question, firstvalue, secondvalue)} className="final_btn">Add Question</button>
                    <Router>
                        <Switch>
                        {/* <Route path="/create" exact> */}
                            <div className="buttons">
                                <Link to="/publish"><button onClick={() => props.singleQuestion(question, firstvalue, secondvalue)} className="final_btn">Publish</button></Link>
                            </div> 
                        {/* </Route> */}
                        {/* <Route path="/publish">
                            <Publish showResult={props.surveyQuestion} />
                        </Route> */}
                        </Switch>
                    </Router>
                </div>
            )
        } else return ''
    }

    const addOption = () => {
        if(optionCount !== 2) {
            setOptionCount(optionCount+1)
        }
    }

    const questionHandler = (e) => {
        setQuestion(e.target.value)
    }

    return (
        <div>
            <div className="QuestionType">
                <label htmlFor="question">Question: <input ref={inputQuestionRef} value={question} onChange={questionHandler} className="input" type="text"/></label><br/>
                <h2>Options: </h2>
                {renderOption()}
                {renderSubmitButton()}
                
            </div>
        </div>
    )
}

export default SingleOption

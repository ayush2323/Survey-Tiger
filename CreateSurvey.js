import React, {useState, useEffect} from 'react'
import MultipleOption from './MultipleOption'
import SingleOption from './SingleOption'

const CreateSurvey = () => {
    const [selectionSelect, setSelectionSelect] = useState('')
    // const [firstRender, setFirstRender] = useState(true)
    const [renderClick, setRenderClick] = useState(false)
    const [surveyQuestion, setSurveyQuestion] = useState([])

    useEffect(() => {
        console.log(surveyQuestion)
    }, [surveyQuestion])

    const clickHandler = (e) => {
        if(renderClick) setSelectionSelect(e.target.value)
        setRenderClick(!renderClick)
    }

    const multipleQuestion = (...parameter) => {
        const copiedSurveyQuestion = [...surveyQuestion]
        let html = <div className="mulQuestions">
            <h3 className="mulQuestion">{parameter.question}</h3>
            <div className="mulOptions">
                <h6 className="mulOption">{parameter.firstValue}</h6>
                <h6 className="mulOption">{parameter.secondValue}</h6>
                <h6 className="mulOption">{parameter.thirsValue}</h6>
                <h6 className="mulOption">{parameter.fourthValue}</h6>
            </div>
        </div>
        copiedSurveyQuestion.push(html)
        setSurveyQuestion(copiedSurveyQuestion)
        setSelectionSelect('')
    }

    const singleQuestion = (...parameter) => {
        console.log("publishhh")
        const copiedSurveyQuestion = [...surveyQuestion]
        let html = <div className="singleQuestions">
            <h3 className="singleQuestion">{parameter.question}</h3>
            <div className="singleOptions">
                <h6 className="singleOption">{parameter.firstValue}</h6>
                <h6 className="singleOption">{parameter.secondValue}</h6>
            </div>
        </div>
        copiedSurveyQuestion.push(html)
        setSurveyQuestion(copiedSurveyQuestion)
        setSelectionSelect('')
    }

    const renderOptionType = () => {
        if(selectionSelect === 'Multi-Select') return <MultipleOption multipleQuestion={multipleQuestion} surveyQuestion={surveyQuestion} />
        else if(selectionSelect === 'Single-Select') return <SingleOption singleQuestion={singleQuestion} surveyQuestion={surveyQuestion} />
        else return ''
    }

    return (
        <div>
            <label htmlFor="select">Select Question Type</label><br/>
            <select onClick={clickHandler}>
                <option name="multiselect">Multi-Select</option>
                <option name="singleselect">Single-Select</option>
            </select>

            {renderOptionType()}
        </div>
    )
}

export default CreateSurvey

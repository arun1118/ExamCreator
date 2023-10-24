import React, { useState } from 'react'

const QuestionPage1 = ({questions, onPageChange}) => {
    const [selectedOptions,setSelectedOptions]=useState(new Array(questions.length).fill(''));

    const handleOptionChange=(qindex,selectedAnswer)=>{
        const updatedOptions=[...selectedOptions];
        updatedOptions[qindex]=selectedAnswer;
        setSelectedOptions(updatedOptions);
    }
    console.log("selected options :",selectedOptions);
    return (
      <div>
          <p>question page 1</p>
          {questions.map((question, qindex)=>(
            <div key={qindex}>
                <h5>
                    <strong>Question:</strong> {question.questionDetail}</h5>
                    {question.options.map((option, oindex)=>{
                        return (
                        <div key={oindex}>
                              <input
                                  type="radio"
                                  value={option}
                                  name={`que_${qindex}`}
                                  checked={selectedOptions[qindex]===option}
                                  onChange={()=> handleOptionChange(qindex,option)}/>{option}
                        </div>)
                    })}
            </div>
            ))}
          <button onClick={()=> onPageChange(2)}>Next</button>
      </div>
    )
}

export default QuestionPage1
import { React, useState } from "react";

const questionBank = [
    {question: "What Language is react based on?", answer: "Javascript", id: 12341,},
    {question: "What are the building blocks of react apps?", answer: "Components",id: 12342,},
    {question:"What's the name of the syntax we us to describe a UI in React?",answer: "JSX",id: 12343,},
    {question: "How to pass data from parent to child component?",answer: "Props",id: 12344,},
    {question: "How to give componenets memory?",answer: "State",id: 12345,},
    {question: "What do we call inputs?", answer: "Inputs", id: 12346 },
];

export default function App(){
    const [activeIndex, setActiveIndex] = useState(100)
    return(
        <div className="container">
           { questionBank.map(x => 
                <Question questionObj={{...x, activeIndex:activeIndex, onShow: () => {
                    setActiveIndex(x.id)
                    if (x.id === activeIndex){setActiveIndex(100) }
                }}} key={x.id}/>
            )}
        </div>
    )
}

function Question({questionObj}){
    return(
        <div className="box">
            <button onClick= {questionObj.onShow} style={{backgroundColor: questionObj.activeIndex !== questionObj.id ? "#ffebb3" : "#76c7ad"}} >
                {questionObj.activeIndex !== questionObj.id ? questionObj.question : questionObj.answer}
            </button>
        </div>
    )
}

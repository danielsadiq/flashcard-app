import { React, useState } from "react";

const questionBank = [
    {question: "What Language is react based on?", answer: "Javascript", id: 12341,},
    {question: "What are the building blocks of react apps?", answer: "Components",id: 12342,},
    {question:"What's the name of the syntax we us to describe a UI in React?",answer: "JSX",id: 12343,},
    {question: "How to pass data from parent to child component?",answer: "Props",id: 12344,},
    {question: "How to give componenets memory?",answer: "State",id: 12345,},
    { question: "What do we call inputs?", answer: "Inputs", id: 12346 },
];

export default function App(){
    const [active, setActive] = useState("")
    return(
        <div className="container">
           { questionBank.map(x => 
                <div className="box" key={x.id} >
                    <button onClick={()=> setActive(x.id===active ? "" : x.id)} style={{backgroundColor: x.id!==active ? "#ffebb3" : "#76c7ad"}}>
                        {x.id!==active ? x.question : x.answer}
                    </button>
                </div>
            )}
        </div>
    )
}

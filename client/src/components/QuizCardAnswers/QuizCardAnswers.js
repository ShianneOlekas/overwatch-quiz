import './QuizCardAnswers.scss';


function QuizCardAnswers({ answers }) {

    const answersRendered = answers?.map((answer) => (
        <li className="answer__li">
            <label for={answer.id}>
                <input type='radio' name='answer' id={answer.id}/>
                {answer.answer}
            </label>
        </li>
    ))

    console.log(answers);
      
    return (
        <ul className="answer__ul">
            {answersRendered}
        </ul>

    )
}

export default QuizCardAnswers;
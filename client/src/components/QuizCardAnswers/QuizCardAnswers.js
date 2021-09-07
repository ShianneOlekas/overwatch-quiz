import './QuizCardAnswers.scss';


function QuizCardAnswers({ answers }) {

    const answersRendered = answers?.map((answer) => (
        <div className="answer__li">
            <input className="answer__input" type='radio' name={answer.qid} id={answer.id} />
            <label className="answer__label" for={answer.id}>
            
            {answer.answer}
            </label>
        </div>
    ))

    console.log(answers);
      
    return (
        <ul className="answer__ul">
            {answersRendered}
        </ul>

    )
}

export default QuizCardAnswers;
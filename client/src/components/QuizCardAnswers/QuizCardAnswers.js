function QuizCardAnswers({answers}) {

    const answersRendered = answers?.map((answer) => (
        <label>
            <input type='radio' name='answer'/> {answer.answer}
        </label>
    ))

    console.log(answers);
      
    return (
        <button>
            {answersRendered}
        </button>
    )
}

export default QuizCardAnswers;
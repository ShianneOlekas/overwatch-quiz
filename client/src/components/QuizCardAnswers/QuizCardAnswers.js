function QuizCardAnswers({answers}) {

    const answersRendered = answers?.map((answer) => (
        <label>
            <input type='radio' name={answer.id}/> {answer.answer}
        </label>
    ))

    console.log(answers);
      
    return (
        <>
            {answersRendered}
        </>
    )
}

export default QuizCardAnswers;
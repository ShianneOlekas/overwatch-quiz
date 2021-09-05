function QuizCardAnswers({questions}) {

    const answersRendered = questions.answers?.map((answer) => (
        <p>{answer.answer}</p>
    ))

    console.log(answersRendered);
      
    return (
        <section>
            {answersRendered}
        </section>
    )
}

export default QuizCardAnswers;
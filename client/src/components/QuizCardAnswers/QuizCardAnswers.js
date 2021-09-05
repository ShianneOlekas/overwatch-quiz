function QuizCardAnswers({answers}) {

    const answersRendered = answers?.map((answer) => (
        <p>{answer.answer}</p>
    ))

    console.log(answers);
      
    return (
        <section>
            {answersRendered}
        </section>
    )
}

export default QuizCardAnswers;
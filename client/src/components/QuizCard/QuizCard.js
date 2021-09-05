function QuizCard({questions}) {

    const questionsRendered = questions?.map((question) => (
        <div key={question.id}>
            <p>{question.question}</p>
        </div>
    ))
      
    return (
        <section>
            {questionsRendered}
        </section>
    )
}

export default QuizCard;
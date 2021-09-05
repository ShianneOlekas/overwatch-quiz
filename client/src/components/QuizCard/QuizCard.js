import QuizCardAnswers from '../../components/QuizCardAnswers/QuizCardAnswers';

function QuizCard({questions}) {

    const questionsRendered = questions?.map((question) => (
        <div key={question.id}>
            <p>{question.question}</p>
            <QuizCardAnswers answers={question.answers}/>
        </div>
    ))
    
      
    return (
        <section>
            {questionsRendered}
        </section>
    )
}

export default QuizCard;
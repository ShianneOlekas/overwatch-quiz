import QuizCardAnswers from '../../components/QuizCardAnswers/QuizCardAnswers';
import './QuizCard.scss';

function QuizCard({questions}) {

    const questionsRendered = questions?.map((question) => (
        <div key={question.id}>
            <h2 className="question__header">{question.question}</h2>
            <QuizCardAnswers answers={question.answers}/>
        </div>
    ))
    
      
    return (
        <>
            <section className="question">
                {questionsRendered}
            <button className="submit btn">submit</button>
            </section>

        </>
    )
}

export default QuizCard;
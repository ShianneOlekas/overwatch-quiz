import QuizCardAnswers from '../../components/QuizCardAnswers/QuizCardAnswers';
import './QuizCard.scss';

function QuizCard({questions}) {

    const questionsRendered = questions?.map((question) => (
        <div key={question.id}>
            <h2 className="question__header">{question.question}</h2>
            <QuizCardAnswers answers={question.answers}/>
        </div>
    ))
    
    const getResults = (e) => {
        e.preventDefault()
        window.location.href ='/result'; 
        }
      
    return (
        <>
            <section className="question">
                {questionsRendered}
            <button className="submit btn" onClick={getResults}>submit</button>
            </section>

        </>
    )
}

export default QuizCard;
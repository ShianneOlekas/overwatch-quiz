import "./Home.scss"
import BasicTextFields from "../../components/HomeForm/HomeForm";

function Home() {
    const beginQuiz = (e) => {
        e.preventDefault()
        window.location.href ='/quiz'; 
        }

    return (
      <div className="main">
        <div className='main__banner'></div>
            {BasicTextFields()}
            <button onClick={beginQuiz} className='btn'>BEGIN</button>
      </div>
    );
  }
  
  export default Home;
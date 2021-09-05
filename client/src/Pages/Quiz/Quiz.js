import { Component } from 'react';
import QuizCard from '../../components/QuizCard/QuizCard';
import axios from 'axios';


class Question extends Component {
    state = {
        questions: [],
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/quiz')
            .then((response) => {
                console.log(response.data);
                if(response.status === 200) {
                    return this.setState({
                        questions: response.data,
                    })
                }
            })
      }
        
    render() {

        return (
            <div>
                <QuizCard questions={this.state.questions}/>
            </div>
        );
    }
};

export default Question;




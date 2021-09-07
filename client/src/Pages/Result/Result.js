import axios from 'axios';
import { Component } from 'react';
import ResultCard from '../../components/ResultCard/ResultCard';

class Result extends Component {
    state = {
        results: [],
    }

  componentDidMount() {
        axios
            .get('http://localhost:8080/result')
            .then((response) => {
                console.log(response.data);
                if(response.status === 200) {
                    return this.setState({
                        results: response.data,
                    })
                }
            })
      }
      
      // 8-15 Tank 16-23 DPS 24+ Support
        
    render() {

        return (
            <div>
            <ResultCard results={this.state.results}/>
            </div>
        );
    }
};

export default Result;




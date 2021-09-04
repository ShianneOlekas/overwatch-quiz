import "./Home.scss"
import { TextField } from '@material-ui/core';

function Home() {
    return (
      <div className="main">
          <div className='main__banner'></div>
          <div className="main__select">
            <TextField />
          </div>
      </div>
    );
  }
  
  export default Home;

import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Row,Form,Col,Button } from 'react-bootstrap';
import Box from './Components/Box';
import Post from './Components/Post';

function App() {
 
  const [shouldLoadData, setShouldLoadData] = useState(false);
  return (
    <div className="App">


<Post updateShouldLoadData={setShouldLoadData} />


      {/* <button onClick={fetchData}>click</button> */}
    

      <Box shouldLoadData={shouldLoadData} updateShouldLoadData={setShouldLoadData} />


      </div>
      );
}

      export default App;

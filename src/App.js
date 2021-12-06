import React, {useEffect, useState} from 'react'
import { Quote } from './components/Quote';
import './css/index.css';
import GetQuotes from './helper/GetQuotes';
function App() {

  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
});


 const updateQuotes = async () =>{
         await GetQuotes()
         .then(data => setQuote(data))
 }

 useEffect(  async () => {
     await updateQuotes();
 }, [])

  return (
    <div className="App">
      <Quote data={quote}/>
      <button onClick={updateQuotes} className='btn'>Generate a new quote</button>
    </div>
  );
}

export default App;

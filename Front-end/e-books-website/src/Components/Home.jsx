import React, { useState,useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const { id } = useParams(); // Accessing id parameter from URL
  const [book, setBook] = useState({
    title: "",
  });
 

  

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/getProduct/${id}`)
      .then((result) => {
        setBook(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]); 


  async function fetchContent() {
    try {
      // setLoading(true);
      setResult('Generating...');
      
      const response = await fetch(`http://localhost:8080/generateContent/Give me detail about the ${book.title}`);
      const text = await response.text();
      
      setResult(text);
    } catch (error) {
      console.error('Error during generation:', error.message);
      setResult('Error during generation. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  
  
  
  return (
    <div style={{ position: 'relative' }}>
      <div>
      <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={book.title}
            />
      </div>
      <button onClick={fetchContent} disabled={loading}>Get More Info</button>
  
      {loading && <div style={{ display: 'block', height: '20px' }}>Loading...</div>}
      <textarea id="result" readOnly value={result} style={{ width: '100%', height: '300px', boxSizing: 'border-box', marginTop: '30px' }} />
    </div>
  );
}

export default Home;

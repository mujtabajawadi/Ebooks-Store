import React, { useState } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  
  async function fetchContent() {
    try {
      setLoading(true);
      setResult('Generating...');
      
      const response = await fetch('http://localhost:8080/generateContent/Give me detail about the book "40 Rules of Love"');
      const text = await response.text();
      
      setResult(text);
    } catch (error) {
      console.error('Error during generation:', error.message);
      setResult('Error during generation. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  
  function copyToClipboard() {
    const textarea = document.getElementById('result');
    textarea.select();
    document.execCommand('copy');
  }
  
  
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={fetchContent} disabled={loading}>Generate</button>
      <button onClick={copyToClipboard} style={{ position: 'absolute', top: 0, right: 0 }}>📋</button>
      {loading && <div style={{ display: 'block', height: '20px' }}>Loading...</div>}
      <textarea id="result" readOnly value={result} style={{ width: '100%', height: '300px', boxSizing: 'border-box', marginTop: '30px' }} />
    </div>
  );
}

export default Home;

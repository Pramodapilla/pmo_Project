import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageURL, setImageURL] = useState('');
  const [inputURL, setInputURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  const handleInputChange = (event) => {
    let link = event.target.value;
    setInputURL(link)
  };

  const fetchImage = async () => {
    setIsLoading(true);
    try {
      setImageURL(inputURL);
    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Fetcher</h1>
        <div>
          <input
            type="text"
            value={inputURL}
            onChange={handleInputChange}
            placeholder="Enter Image URL"
          />
          <button onClick={fetchImage} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Fetch Image'}
          </button>
        </div>
        {imageURL && <img src={imageURL} alt="Fetched" />}
      </header>
    </div>
  );
}

export default App;

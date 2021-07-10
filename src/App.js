import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [addCountry, setAddCountry] = useState([]);
  const handleAddCountry = (country) => {
    setAddCountry([...addCountry, country]);
  };
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='App'>
      <h1>Country Loaded : {countries.length}</h1>
      <h2>Country Added : {addCountry.length}</h2>
      <ul>
        {countries.map((country) => (
          <Country
            country={country}
            handleAddCountry={handleAddCountry}
            key={country.alpha3Code}
          ></Country>
        ))}
      </ul>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

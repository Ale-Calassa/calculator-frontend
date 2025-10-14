import React, { useState, useEffect } from "react";
import './App.css';

const API_URL = "https://web-production-eb09d.up.railway.app";

function App() {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    try {
      const response = await fetch(`${API_URL}/calculate`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operation })
      });
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setResult(null);
      } else {
        setResult(data.result);
        setHistory(data.history);
        setError('');
      }
    } catch (err) {
      setError('Erro ao conectar! Atualize a página e tente novamente.');
    }
  };

  const handleClearHistory = async () => {
    try {
      await fetch(`${API_URL}/history`, { method: 'DELETE' });
      setHistory([]);
    } catch (err) {
      setError('Erro ao limpar o histórico.');
    }
  };

  const handleClear = () => {
    setOperation('');
    setResult(null);
    setError('');
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      handleCalculate();
    } else {
      setOperation((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const validKeys = '0123456789+-*/.=';
      if (validKeys.includes(e.key)) {
        handleButtonClick(e.key);
      } else if (e.key === 'Enter') {
        handleCalculate();
      } else if (e.key === 'Backspace') {
        setOperation((prev) => prev.slice(0, -1));
      } else if (e.key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="calc-container">
      <h1>Calculadora com Histórico</h1>

      <div className="calc-display">{operation || '0'}</div>

      <div className="calc-button-grid">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={btn === '=' ? 'equals' : ''}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>⬅️</button>
        <button onClick={handleClearHistory}>Limpar Histórico</button>
      </div>

      {error && <p className="error">{error}</p>}
      {result !== null && <p className="result">Resultado: {result}</p>}

      <div className="calc-history">
        <h3>Histórico:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

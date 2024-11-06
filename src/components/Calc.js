import React, { useState } from 'react';
import './Calc.scss';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(''); // Estado para a mensagem de erro

  const handleCalculation = (operation) => {
    // Verificação de preenchimento dos campos
    if (!num1 || !num2) {
      setError('É necessário inserir os dois números');
      setResult(null); // Limpa o resultado ao mostrar o erro
      return;
    }

    setError(''); // Limpa a mensagem de erro se ambos os campos estiverem preenchidos

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    let res;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero';
        break;
      default:
        res = 'Operação inválida';
    }
    setResult(res);
  };

  const isDisabled = !num1 || !num2;

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Primeiro número"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Segundo número"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleCalculation('+')} disabled={isDisabled}>+</button>
        <button onClick={() => handleCalculation('-')} disabled={isDisabled}>-</button>
        <button onClick={() => handleCalculation('*')} disabled={isDisabled}>*</button>
        <button onClick={() => handleCalculation('/')} disabled={isDisabled}>/</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      {result !== null && <div className="result">Resultado: {result}</div>}
    </div>
  );
};

export default Calculator;

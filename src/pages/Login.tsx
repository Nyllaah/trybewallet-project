import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../redux/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/carteira');
    dispatch(userAction(loginForm.email));
  };

  const isFormValid = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(loginForm.email)
    && loginForm.password.length >= 6;

  return (
    <form>
      <input
        type="email"
        name="email"
        value={ loginForm.email }
        onChange={ handleChange }
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        type="text"
        name="password"
        value={ loginForm.password }
        onChange={ handleChange }
        data-testid="password-input"
        placeholder="Senha"
      />
      <button
        type="button"
        onClick={ handleSubmit }
        disabled={ !isFormValid }
      >
        Entrar

      </button>
    </form>
  );
}

export default Login;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/authOperation';
import s from '../Register/RegisterPage.module.scss';

export default function Register({ isLogin = false }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userMap = {
    email: setEmail,
    name: setName,
    password: setPassword,
  };

  const handleChange = e => {
    const { name, value } = e.target;
    userMap[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      dispatch(
        logIn({
          email,
          password,
        })
      );
    } else {
      dispatch(
        register({
          email,
          name: name,
          password: password,
        })
      );
      e.target.reset();
    }
  };

  return (
    <div className={s.section}>
      <h2>{!isLogin ? 'Create account' : 'Sing in'}</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Your name is..."
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Your email:"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password:"
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          {!isLogin ? 'Sing in' : 'Sign up'}
        </button>
      </form>
    </div>
  );
}

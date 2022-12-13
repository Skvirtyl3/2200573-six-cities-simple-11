import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getIsAuthorised } from '../../store/user-process/selectors';

function LoginForm() : JSX.Element
{
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const isAuthorised = useAppSelector(getIsAuthorised);

  useEffect(() => {
    if(isAuthorised)
    {
      navigate(AppRoute.Main);
    }
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setShowError(false);

    if (loginRef.current !== null && passwordRef.current !== null &&
      /\d/.test(passwordRef.current.value) && /[a-zA-Z]/.test(passwordRef.current.value))
    {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
    else
    {
      setShowError(true);
    }
  };

  const [showError, setShowError] = useState(false);
  return(
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input ref={passwordRef} style={showError ? {borderColor: 'red', marginBottom: '12px'} : {}} className="login__input form__input" type="password" name="password" placeholder="Password" required />
          {showError && <span style={{color: 'red'}}>Неверный пароль</span>}
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
}

export default LoginForm;

import './error-screen.css';

type ErrorScreenProp = {
  errorText: string;
  onClick: () => void;
}

function ErrorScreen({onClick, errorText}: ErrorScreenProp): JSX.Element {

  return (
    <main className="page__main page__main--property">
      <div className="error-screen">
        <p>{errorText}</p>
        <button className="try-button"
          onClick={onClick}
          type="button"
        >
          Попробовать ещё раз
        </button>
      </div>
    </main>
  );
}

export default ErrorScreen;

type ErrorScreenProp = {
  errorText: string;
  onClick: () => void;
}

function ErrorScreen({onClick, errorText}: ErrorScreenProp): JSX.Element {

  return (
    <main className="page__main page__main--property">
      <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <p>{errorText}</p>
        <button style={{color: '#fff', backgroundColor: '#4481c3', borderRadius: '4px'}}
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

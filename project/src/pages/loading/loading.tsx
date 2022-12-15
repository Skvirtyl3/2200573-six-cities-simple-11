import './loading.css';

function Loading(): JSX.Element {
  return (
    <div className="loading__main">
      <img src="img/loading.gif" alt="loading..." width="100px" className="loading__img"/>
    </div>
  );
}

export default Loading;

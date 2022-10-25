import Main from '../../pages/main/main';

type AppProps = {
  settigCount: number;
}

function App(props: AppProps): JSX.Element {
  return <Main settigCount={props.settigCount}/>;
}

export default App;

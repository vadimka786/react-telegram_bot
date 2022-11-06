import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect( () => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      Ok
      <button onClick={ onClose }>X</button>
    </div>
  );
}

export default App;

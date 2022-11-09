import { useEffect } from 'react';
import './App.css';
import { UseTelegram } from './hooks/useTelegram';



function App() {

  const {onToggleButton, tg} = UseTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <button onClick={ onToggleButton } >X</button>
    </div>
  );
}

export default App;

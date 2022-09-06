import { AppFunction } from './main-container/main';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "To-do List React-App";
  }, [])

  return (
    <div className="App">
      <AppFunction />
    </div>
  );
}

export default App;

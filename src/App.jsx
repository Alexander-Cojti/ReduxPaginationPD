import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import Pokemones from './components/pokemones';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
}

export default App;
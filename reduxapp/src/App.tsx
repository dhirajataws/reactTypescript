import * as React from 'react';
import './App.css';
import 'flexboxgrid';

import { Screen } from './features/structure';

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to React</h1>
        </header>
        <Screen>


        </Screen>

      </div>
    );
  }
}

export default App;

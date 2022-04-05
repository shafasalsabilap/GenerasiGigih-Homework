import './App.css';
import Home from './pages/home';
import { Provider } from "react-redux";
import store from './store';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
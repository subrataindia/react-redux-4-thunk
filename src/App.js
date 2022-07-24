import './App.css';
import store from './store/store';
import { Provider} from 'react-redux'
import PersonalDetails from './components/personalDetails'
import Number from './components/number'

console.log("Testing Redux");

store.subscribe(() => {console.log("store updated...",store.getState())})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <h1>Redux 4.0</h1> 
          <PersonalDetails />
          <Number />
      </div>
    </Provider>
  );
}

export default App;
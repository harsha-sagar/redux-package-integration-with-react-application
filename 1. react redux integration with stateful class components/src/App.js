import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import store from './redux/store';
import UsersContainer from './containers/UsersContainer';

function App() {
  return (
		<Provider store={ store }>
			<div className="App">
				<UsersContainer />
			</div>
		</Provider>
  );
}

export default App;

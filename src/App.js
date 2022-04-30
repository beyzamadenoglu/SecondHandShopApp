import './App.css';
import './styles/form.css';
import { ToastContainer } from 'react-toastify'; 
import './styles/toast.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <ToastContainer />
    </div>
  );
}

export default App;

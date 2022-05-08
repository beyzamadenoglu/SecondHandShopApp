import './App.css';
import './styles/form.css';
import { ToastContainer } from 'react-toastify';
import './styles/toast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';



function App() {
  return (
    <>
        <Router />
        <ToastContainer />

    </>
  );
}

export default App;

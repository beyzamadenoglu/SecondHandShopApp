import './App.css';
import './styles/form.css';
import { ToastContainer } from 'react-toastify';
import './styles/toast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';
import Layout from './components/Layout';


function App() {
  return (
    <>
      <Layout>
        <Router />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default App;

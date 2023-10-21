import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
}

export default App;

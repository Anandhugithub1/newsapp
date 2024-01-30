import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './Home/Nav';


function App() {




  return (
    <>      <header><Nav/></header>
    <Outlet/>

    </>

  );
}

export default App;

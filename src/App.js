import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => {
    return (<div>
      <h1>HATS PAGE</h1>
    </div>);
  
};

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/hats' element={<HatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

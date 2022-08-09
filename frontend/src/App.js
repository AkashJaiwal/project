import React from 'react';
import Header from './components/Header';
import AcuityScreen from './screen/AcuityScreen';
import {Route,Routes} from 'react-router-dom' 
import ReportScreen from './screen/ReportScreen';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<ReportScreen/>}/>
        <Route path='/acuity/' element={<AcuityScreen/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import AcuityScreen from './screen/AcuityScreen';
import {Route,Routes} from 'react-router-dom' 
import ReportScreen from './screen/ReportScreen';
function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <p className="heading_acuity_categoery">ACUITY SCORING</p>
      </div>
      <div className="container-fluid">
        <Routes>
          <Route path='/' element={<AcuityScreen/>}/>
          <Route path='/report/' element={<ReportScreen/>}/>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

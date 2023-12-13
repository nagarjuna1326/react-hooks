  
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';


import HookCounterTwo from './components/HookCounterTwo';
import UseStateObject from './components/UseStateObject';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import DateDifference from './components/DateDifference';
import SimpleInterestCalculator from './components/SimpleInterestCalculator/SimpleInterestCalculator';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Box sx={{minHeight : '10vh'}}>
        <Navbar />
      </Box>
      <br />
      
      <Routes >
        <Route path='/' element={<ClassCounter />} />
        <Route path='/hookCounter' element={<HookCounter /> } />
        <Route path='/hookCounterTwo' element={<HookCounterTwo /> } />
        <Route path='/useStateObject' element={<UseStateObject />} />
        <Route path='/dateDifference' element={<DateDifference />} />
        <Route path='/SICalculator' element={<SimpleInterestCalculator /> } />
      
      
      </Routes>
      
      {/* <Stack spacing={2} direction='column'>
        <Card sx={{padding : '10px'}}>
          <ClassCounter />
        </Card>
        <Card sx={{padding : '10px'}}>
          <HookCounter />
        </Card>
        <Card sx={{padding : '10px'}}>
          <HookCounterTwo />
        </Card>
        <Card sx={{padding : '10px'}}>
          <UseStateObject />
        </Card>

      </Stack> */}
      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Calender from './components/Calender';
import moment from 'moment'
import 'antd/dist/antd.css';
import './App.css';
function App() {
  
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
    console.log(e)
  }
  return (
    <Provider store={store}>
    
    <Calender 
    
    />
  
  </Provider>
  );
}

export default App;
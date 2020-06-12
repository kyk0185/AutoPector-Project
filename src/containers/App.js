import React,{useState,useEffect} from 'react';
import '../scss/App.scss';
import {data} from '../Dummy';  
import Header from'../components/Header';
import ContentsBody from'../components/ContentsBody';

import moment from 'moment';
import 'moment/locale/ko';

const App = () =>{
  const [items, setItems] = useState(data);
  const [currentTime, setCurrentime] = useState('');

  useEffect(() => {
    setInterval(onTimer, 1000);
  },[])

  //현재 시간 출력
  const onTimer =_=> {
    setCurrentime(moment(new Date()).format('lll'));
  }
  return (
    <div className="App">
      <Header currentTime={currentTime}/>
      <ContentsBody datas={items}/>
    </div>
  );
}

export default App;

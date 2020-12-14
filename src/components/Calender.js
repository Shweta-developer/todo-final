import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { connect } from "react-redux";
import * as actions from "../actions/todo";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import FooterPage from './FooterPage';
import TimeLinePage from './TimeLinePage';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Divider,Breadcrumb } from 'antd';
import { Typography } from 'antd';
import Weather from './Weather';
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const Calender= ({ todos, fetchTodo }) => {
    const todo = useSelector(state => state.todo)
  const dispatch=useDispatch();
  const [dateState, setDateState] = useState(moment(new Date()).format('MMMM Do YYYY'))
  const [selectedDay, setSelectedDay] = useState(null);
  const [todoarr, settodoarr] = useState([])
  var newArr=[];
  const changeDate = (e) => {
    setSelectedDay(e)
    setDateState(moment(e.month+'/'+e.day+"/"+e.year).format('MMMM Do YYYY'))
    console.log(moment(e.month+'/'+e.day+"/"+e.year).format('MMMM Do YYYY'))
  }
  useEffect(() => {
    dispatch(actions.fetchAll());

}, [])
  useEffect(() => {
    newArr=todo.list.filter(todoeach=>todoeach.date.includes(dateState))
    settodoarr(newArr)

}, [dateState])
  return (
    
    <Layout >
    <Sider className="sider-layout" >
      
      <div><Weather /></div>
      <div><TimeLinePage todoarray={todoarr}/></div>
      
      
    
      
    </Sider>
    <Layout className="site-layout" style={{background:'#fff'}}>
      <Header className="site-layout-background" style={{ padding: 0,background:'#E6EEF5',textAlign:'center',minWidth:700 }} ><Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <Col span={24}>
        <Title level={4} style={{paddingTop:'10px',color:'#777978'}}>{dateState}</Title></Col></Row></Header>
      <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>ToDo App</Breadcrumb.Item>
              
            </Breadcrumb>
        <div className="site-layout-background" style={{ padding: '24px', minHeight: 350,alignItems:'center',justifyContent:'center',display:'flex',minWidth:700 }}>
        <Calendar
      value={selectedDay}
      onChange={changeDate}
      calendarClassName="responsive-calendar" // added this
      shouldHighlightWeekends/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center',background:'#ffff',minWidth:700 }}>
      <Divider style={{background:'#D7DED7'}}/>
      <FooterPage allTasks={todoarr.length} complete={todoarr.filter(com=>com.status.includes("complete")).length}
  postponed={todoarr.filter(pstpon=>pstpon.status.includes("postponed")).length}
  undone={todoarr.filter(ud=>ud.status.includes("undone")).length}/></Footer>
    </Layout>
  </Layout>
  );
}


export default Calender;




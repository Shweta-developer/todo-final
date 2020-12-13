import React from 'react';
import { Typography ,Row, Col} from 'antd';
import ModalPage from './ModalPage';

const { Title } = Typography;
const FooterPage= (props) => {
    
  return (
    <>
<div >
<Row gutter={16}>
      <Col  span={5}>
<p style={{fontSize:'1.5vw',color:'green'}}>Complete</p></Col>
<Col  span={5}><p style={{fontSize:'1.5vw',color:'yellow'}}>Postponed</p></Col>
<Col  span={5}><p style={{fontSize:'1.5vw',color:'red'}}>Undone</p></Col>
<Col  span={5}><p style={{fontSize:'1.5vw',color:'grey'}}>All Tasks</p></Col>
<Col  span={4}></Col></Row>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col  span={5}>
<Title level={5} style={{color:'green'}}>{props.complete}</Title></Col>
<Col  span={5}><Title level={5} style={{color:'yellow'}}>{props.postponed}</Title></Col>
<Col  span={5}><Title level={5} style={{color:'red'}}>{props.undone}</Title></Col>
<Col  span={5}><Title level={5} style={{color:'grey'}}>{props.allTasks}</Title></Col>
<Col  span={4}><ModalPage /></Col></Row>
     
   </div>
  </>
  );
}


export default FooterPage;
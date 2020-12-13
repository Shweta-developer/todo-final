import React from 'react';
import { Typography ,Row, Col} from 'antd';
import ModalPage from './ModalPage';

const { Title } = Typography;
const FooterPage= (props) => {
    
  return (
    <>
<div>
<Row gutter={16}>
      <Col  span={4}>
<Title level={4} style={{color:'green'}}>Complete</Title></Col>
<Col  span={4}><Title level={4} style={{color:'yellow'}}>Postponed</Title></Col>
<Col  span={4}><Title level={4} style={{color:'red'}}>Undone</Title></Col>
<Col  span={4}><Title level={4} style={{color:'grey'}}>All Tasks</Title></Col>
<Col  span={4}></Col><Col  span={4}/></Row>
<Row gutter={16}>
      <Col  span={4}>
<Title level={4} style={{color:'green'}}>{props.complete}</Title></Col>
<Col  span={4}><Title level={4} style={{color:'yellow'}}>{props.postponed}</Title></Col>
<Col  span={4}><Title level={4} style={{color:'red'}}>{props.undone}</Title></Col>
<Col  span={4}><Title level={4} style={{color:'grey'}}>{props.allTasks}</Title></Col>
<Col  span={4}><ModalPage /></Col><Col  span={4}/></Row>
     
   </div>
  </>
  );
}


export default FooterPage;
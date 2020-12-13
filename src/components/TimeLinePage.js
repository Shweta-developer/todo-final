import React from 'react';
import { Timeline } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const TimeLinePage= (props) => {
    
  return (
    <>
    {(props.todoarray?.length)? 
    <div>
    <div>
    <Title level={4} style={{color:'white'}}>{props.todoarray[0].date.split(',')[0]}</Title>
      
    </div>
    <div style={{padding:'10px'}}>
    <Timeline>
    {  
                        props.todoarray.map((record, index) => {
                            return (
                            <Timeline.Item key={record.date} color={{
                              'complete': "green",
                              'undone': "red",
                              'postponed':"yellow"
                            }[record.status]} style={{color:'#fff'}}>{record.date.split(',')[1]} {record.description}</Timeline.Item>
                            )
                        })}
  </Timeline>
    </div>
    </div>: <div><Title level={4} style={{color:'white'}}>No Tasks</Title></div>}
    

  
  </>
  );
}


export default TimeLinePage;
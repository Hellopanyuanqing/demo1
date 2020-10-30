import './App.css';
import React, { useState } from 'react';
import { Tree,Modal,Input } from 'antd';

function App() {
  const [treeData,setTreeData] = useState(
    [{
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    }]);
    const [ModalShow,setModalShow]=useState(false)
    const [key,setKey]=useState("")
    const [title,setTitle]=useState("")



 //点击隐藏  
const onHideModal=()=>{
  setModalShow(false)
   
}
const handleChange=(e)=>{
  setTitle(e.target.value)
}

const OKModal=()=>{
  setModalShow(false)
   const data=[...treeData]
   setTreeData(getArr(data))
  
}
const getArr=(arr)=>{ 
   return arr.map((item)=>{
      if(item.children){
        if(item['key']===key){
          item['title']=title;
          
          }
        getArr(item.children)
      }else{
        if(item['key']===key){
          item['title']=title;
          }
      }
     return item 
   })
}
const treeOnclick=(selectedKeys,e)=>{

  setKey(e.node.key)
  setModalShow(true)
}
  return (
   <div>
    <Tree
      onSelect={treeOnclick}
      treeData={treeData}
    />
     <Modal
                    title="确认修改吗"
                    visible={ModalShow}
                    okText="确定修改"
                    cancelText="我点错了"
                    onOk={OKModal}
                    onCancel={onHideModal}
                    maskClosable={false}
                   >
                     <Input type="text" onChange={handleChange}/>
                   </Modal>
    </div>
  );
}

export default App;

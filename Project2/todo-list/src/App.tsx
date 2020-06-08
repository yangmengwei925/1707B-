import React, {useState} from 'react'
import List from './components/List'
import { IListItem } from './type';

const App:React.FC = props=>{
  // 创建state
  let [todo, setTodo] = useState('');

  let [len, setLen] = useState(0);

  let [list, setList] = useState<IListItem []>([]);

  let addList = (e: React.MouseEvent)=>{
    if (todo){
      setList([...list, {
        id: len,
        name: todo,
        finish: false,
        timestamp: +new Date
      }]);
      setLen(len+1);
      setTodo('');
    }
  }

  let changeState = (id: number)=>{
    let newList = [...list];
    let index = newList.findIndex(item=>item.id===id);
    newList[index].finish = !newList[index].finish;
    setList(newList)
  }

  return <>
    <section>
      <input type="text" value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button onClick={addList}>添加</button>
    </section>
    
    <List list={list} changeState={changeState}/>
  </>
};

export default App;

class MyApp extends React.Component{
  constructor(props: any){
    super(props)
    this.forceUpdate();
  }

  render(){
    return null
  }
}
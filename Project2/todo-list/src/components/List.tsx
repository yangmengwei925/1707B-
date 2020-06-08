import React from 'react'
import { IListItem } from '../type';

interface IProps {
    list: IListItem[],
    changeState: (id: number)=>void
}

const List: React.FC<IProps> = props => {
    return <>{
        props.list.map(item => {
            return <li key={item.id} onClick={()=>props.changeState(item.id)} style={{textDecoration: item.finish?'line-through': 'none'}}>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.timestamp}</span>
            </li>
        })
    }</>
};

export default List;
import ListItem from '../list-item/list-item.component';
import { useContext } from 'react';
import { ListContext } from '../../context/list.context';
import './list.styles.scss'

const List = () => {
    
    return(
        <div className='list-container'>
            
            <ListItem/>
        </div>
    )
}

export default List;
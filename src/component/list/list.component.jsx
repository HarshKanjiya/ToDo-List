import ListItem from '../list-item/list-item.component'
import './list.styles.scss'

const List = ({todos}) => {

    return(
        <div className='list-container'>
            {
                todos.map((todo, index)=>( <ListItem todo={todo} key={index}  /> ))
            }
        </div>
    )
}

export default List;
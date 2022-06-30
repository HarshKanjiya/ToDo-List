
import './list-item.styles.scss'

const ListItem = ({todo,index,deleteElement}) => {

    const remove = () => {
        deleteElement(index)
    }
    return(
        <div className='list-item-container'>
            <span className='task'>{todo}</span>
            <button className='clear-task' onClick={remove} > + </button>
        </div>      
)
}
export default ListItem;
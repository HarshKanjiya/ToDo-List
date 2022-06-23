import './list-item.styles.scss'

const ListItem = (props) => {
    const { item } = props;
    return(
        <div className='list-item-container'>
            <span className='task'>{item}</span>
            <button className='clear-task'> + </button>
        </div>
    )
}
export default ListItem;
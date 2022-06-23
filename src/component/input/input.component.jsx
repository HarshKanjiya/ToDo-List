import List from '../list/list.component';
import './input.styles.scss'

const Input = ()  => {
    
    return(
        <>
            <div className='input-container'>
                <input 
                className='input'
                type="text" 
                placeholder='add Task'
                ></input>
                <button
                className='button'
                >
                    +
                </button>
            </div>
                <List/>
        </>
    )
}

export default Input;
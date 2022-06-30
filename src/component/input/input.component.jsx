import {  useState } from 'react';

import ListItem from '../list-item/list-item.component';
import Footer from '../footer/footer.component';
import './input.styles.scss'

const Input = ()  => {
    
    const [todos, setTodos ] = useState(['Learn React.','Make Projects.','Earn Money!']);
    const [str, setStr ] = useState('');

    
    
    const updateStr = (event) => {
        setStr(event.target.value)
    }
    const clickHandler = () => {
        if(!str){return}
        var task = todos;
        task.push(str);
        setTodos(task);
        setStr('');
    }
    const deleteElement = (index) =>{
        var x = todos;
        var y = [];

        for (let i = 0; i < x.length; i++) {
            if(x[index] !== x[i]){
                y.push(x[i])
            }
        }
        setTodos(y)
        // console.log('y', y)
    }
    const erase = () =>{
        setTodos([])
    }

    return(
        <>
            <div className='input-container'>
                <input 
                className='input'
                type="text" 
                placeholder='add Task'
                onChange={updateStr}
                ></input>
                <button
                className='button'
                onClick={clickHandler}
                >
                    +
                </button>
            </div>
            
         
            <div className='list-container'>
            {
                todos.map((todo, index)=>( <ListItem  deleteElement={deleteElement} index={index} todo={todo} key={index}  /> ))
            }
            </div>        
            

            <Footer todos={todos} erase={erase}/>
            
                
        </>
    )
}

export default Input;
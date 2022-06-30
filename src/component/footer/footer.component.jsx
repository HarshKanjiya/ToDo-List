import { useEffect, useState } from 'react'
import './footer.styles.scss'

const Footer = ({todos,erase}) => {
    const [number, setnumber] = useState();
    useEffect(()=>{
        setnumber(todos.length)
    })

   
    return(
        <div className='footer-container'>
            <span className='helper'>You have {number} tasks pending!</span>
            <button className={number?'clear-all-dark':'clear-all-light'} onClick={erase}>Clear All</button>
        </div>
    )
}

export default Footer;
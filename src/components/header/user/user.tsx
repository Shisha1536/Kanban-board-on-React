import icon from './img/Vector.svg'
import './user.css';

export function User() {
    return(
       <form id='block-user' className='block-user'>
            <img className='user-icon' src={icon} alt="Картинка" />
            <select form='#block-user' title='list-user' name="list-user" className="list-user">   
                <option>Профиль</option>
                <option>Выйти из системы</option>
            </select>
       </form>
    )
}
import './hat.css'
import { User } from './user/user'

export function Hat() {
    return(
        <header className='hat'>
            <h1 className='hat__heading'>Потрясающая доска для Канбана</h1>
            <User />
        </header>
    )
}
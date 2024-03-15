import './task-blocks.css';
import { AddTask } from "./addTask";

export function Finished() {
    return (
        <div className="block">
            <label className='block-label' htmlFor="#">Выполнено</label>
            <AddTask />
        </div>
    )
}
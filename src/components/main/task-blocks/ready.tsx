import './task-blocks.css';
import { AddTask } from "./addTask";

export function Ready() {
    return (
        <div className='block'>
            <label className='block-label' htmlFor="#">Взять в работу</label>
            <AddTask />
        </div>
    )
}
import './task-blocks.css';
import { AddTask } from "./addTask";

export function InProgress() {
    return (
        <div className='block'>
            <label className='block-label' htmlFor="#">В процессе</label>
            <AddTask />
        </div>
    )
}
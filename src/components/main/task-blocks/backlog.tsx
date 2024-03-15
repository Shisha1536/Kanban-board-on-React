import './task-blocks.css';
import { AddTask } from "./addTask";

export function Backlog() {
    return (
        <div className="block">
            <label className='block-label' htmlFor="#">На уточнение</label>
            <AddTask />
        </div>
    )
}
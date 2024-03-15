import React from 'react';
import './calculationTasks.css';

export function СalculationTasks() {
    let date = new Date();
    
    return(
        <React.Fragment>
            <div className='footer__task-counter'>
                <div>
                    <h4>Активные задачи: </h4><p></p>
                </div>
                <div>
                    <h4>Завершенные задачи: </h4><p></p>
                </div>
            </div>
            <div className='footer__date'>
                <h4>Доска Канбан от: </h4><p>{date.getDate()}.{Number(1+date.getMonth())}.{date.getFullYear()}</p>
            </div>
        </React.Fragment>
    )
}
import React from 'react';
import './calculationTasks.css';

export function СalculationTasks() {
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
                <h4>Доска Канбан от </h4><p></p>
            </div>
        </React.Fragment>
    )
}
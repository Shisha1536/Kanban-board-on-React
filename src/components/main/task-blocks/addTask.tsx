import React, { createElement } from "react"

export function AddTask() {
    let AddTaskClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        let lableBlock = event.currentTarget.parentNode?.firstChild?.textContent;
        if (lableBlock === 'На уточнение') {
            let block = event.currentTarget.parentElement;
            let input = createElement('input', {className: 'new-task', type: 'text', placeholder: 'Имя задачи'});
            console.log(input)
            //block?.append(input)
            
        } else if  (lableBlock === 'Взять в работу') {
            console.log(lableBlock);
        } else if  (lableBlock === 'В процессе') {
            console.log(lableBlock);
        } else if  (lableBlock === 'Выполнено') {
            console.log(lableBlock);
        } 
        
        //console.log(event.currentTarget.parentNode?.firstChild?.textContent);
    }

    return(
        <button className="add-task_btn" type="button" onClick={AddTaskClick}>+ Add a task</button>
    )
}
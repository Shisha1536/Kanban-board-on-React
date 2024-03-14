import { Backlog } from "./task-blocks/backlog";
import { Ready } from "./task-blocks/ready";
import { InProgress } from "./task-blocks/inProgress";
import { Finished } from "./task-blocks/finished";
import './content.css';

export function Content() {
    
    return(
        <main className="content-block">
            <Backlog />
            <Ready />
            <InProgress />
            <Finished />
        </main>
    )
}
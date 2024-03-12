import { Backlog } from "./task-blocks/backlog";
import { Ready } from "./task-blocks/ready";
import { InProgress } from "./task-blocks/inProgress";
import { Finished } from "./task-blocks/finished";

export function Content() {
    
    return(
        <main>
            <Backlog />
            <Ready />
            <InProgress />
            <Finished />
        </main>
    )
}
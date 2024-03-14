import { СalculationTasks } from "./calculation-of-tasks/calculationTasks";
import './footer.css';

export function Basement() {
    return (
        <footer className="footer__block">
            <СalculationTasks />
        </footer>
      );
}
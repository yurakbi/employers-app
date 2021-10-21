
import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in the company N</h1>
            <h2>Summary count of employees: {employees}</h2>
            <h2>Will recieve an award: {increased}</h2>
        </div>
    )
}

export default AppInfo;
import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All employess
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    To increasу sallary
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Sallary more then 1000$
            </button>
        </div>
    )
}

export default AppFilter;
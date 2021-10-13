import { Component } from 'react';


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            data: [
                {name: 'John C.', salary: 500, increase: false, id: 1},
                {name: 'Alex B.', salary: 3000, increase: true, id: 2},
                {name: 'Brown K.', salary: 5000, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
  
    render() {
        return(
            <div className='app'>
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployersAddForm/>
    
                
                
            </div>
        )
    }
    
}



export default  App;
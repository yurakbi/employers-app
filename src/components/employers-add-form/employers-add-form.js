import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Add new employe</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What his name?" 
                        name="name"
                        value={name}
                        onClick={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Sallary $?"
                        name="salary"
                        value={salary} 
                        onClick={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;
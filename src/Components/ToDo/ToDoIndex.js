import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';




export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state ={
            list: ['sample task'],
            newItem: '',
            doneList: ['sample completed task']
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        e.preventDefault();
        this.setState({
            list: [...this.state.list, this.state.newItem],
            newItem: ''
        })
        console.log(this.state.list);
    }

    removeDoneItem(item){
        this.setState({
            doneList: this.state.doneList.filter(foo => foo !==item)
        })
    }
    removeItem(item){
        this.setState({
            list: this.state.list.filter(foo => foo !== item)
        })

        this.setState({
            doneList: [...this.state.doneList, item]
        })
    }

    addItemHandler(e){
        this.setState({ newItem: e.target.value })
    }
    

    render(){
        return(
            <div>
                    <h3>ToDo List</h3>
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.newItem} placeholder="enter task" required onChange={(e) => this.addItemHandler(e)}/>
                    
                    <br />
                    <br />
                    <Button outline color='primary' type='submit'>Add Item</Button>
                </form>
                <br />
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Tasks To Do</th>
                        <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item, index) => (
                            <tr key={index}>
                                <td></td>
                                <td>{item}</td>
                                <td><Button color='success' size ="sm" type='button' onClick={() => this.removeItem(item)}>Done!</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
                <hr />
                <Table striped bordered hover responsive>
                <thead>
                        <tr>
                        <th>#</th>
                        <th>Completed Tasks</th>
                        <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doneList.map((item) =>(
                            <tr>
                                <td></td>
                                <td>{item}</td>
                                <td><Button color='danger' size ="sm" type='button' onClick={() => this.removeDoneItem(item)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
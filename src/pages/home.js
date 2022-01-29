import React, {
    Component
} from 'react';
import ReactTable from 'react-table';
import '../App.css'
//import SiteWrapper from '../container/layout';
// import {
//     Page, Card, Button, Form, Grid, List, Container, Alert, Badge
// } from 'tabler-react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
// import moment from 'moment';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            currentindex: -1,
            currentList: {},
            currentTodos: [],
            editMode: false,
            loading: false,
            AlertText: "",
            AlertType: "danger",
            removeLoader: false,
            columns: [],
        }
    }

    componentDidMount = () => {
        // if (!localStorage.user) {
        //     this.props.history.push('/login');
        // }
        this.getAllToDos();
        this.setHeaders();

        //console.log(localStorage.user);
    }

    getAllToDos = async () => {
        try {
            axios.get('http://localhost:8000/getdata')
                .then(response => {
                    //console.log(response);
                    let finalarr = [];
                    let data = response.data;
                    if(data.length==0){
                        axios.get('http://localhost:8000/fetchdata').then(res=>{
                            this.setState({
                                todoList: res.data
                            }, () => {
                                console.log('body', this.state.todoList)
                            })
                        })
                    }else{
                        this.setState({
                            todoList: data
                        }, () => {
                            console.log('body', this.state.todoList)
                        })

                    }

                    
                })
                .catch(err => {
                    console.log(err);
                });
        } catch (ex) {
            console.log(ex);
        }
    }

    setHeaders = () => {
        let columns = [
            { Header: 'Name', accessor: 'Name' },
            { Header: 'Email', accessor: 'Email' },
            { Header: 'Gender', accessor: 'Gender' },
            { Header: 'Status', accessor: 'Status' },
        ];
        this.setState({
            columns: columns
        }, () => {
            console.log('headers', this.state.columns);
        })
    }

    updateDetails = (Id) => {
        debugger;
        let update = JSON.parse(JSON.stringify(this.state.todoList));
        update[Id].isUpdate = true;
        this.setState({
            todoList: update
        });
        // console.log(Id);
        // let xyz = (this.state.todoList.map(item => item.Id));

        // let bl = xyz.findIndex(key => key == Id);
        // if (bl > -1) {

        //     let abc = this.state.todoList[bl]
        //     console.log("asd", abc)
        // }
    }

    saveUpdates(data) {
        console.log(data);
        
        axios.post('http://localhost:8000/updatedata',data).then(res=>{
            this.getAllToDos();

        })
    }

    updateFields(index, key, value) {
        let update = JSON.parse(JSON.stringify(this.state.todoList));
        update[index][key] = value;
        this.setState({
            todoList: update
        });
    }

    _renderObject() {


        return Object.entries(this.state.todoList).map(([key, value], i) => {
            return (
                <tr key={key}>
                    <td >{value.isUpdate ? <input type="text" value={value.Name} onChange={e => {
                        this.updateFields(i, "Name", e.target.value)
                    }} /> :value.Name}</td>
                    <td >{value.isUpdate ? <input type="text" value={value.Email} onChange={e => {
                        this.updateFields(i, "Email", e.target.value)
                    }} /> : value.Email}</td>
                    <td >{value.isUpdate ? <input type="text" value={value.Gender} onChange={e => {
                        this.updateFields(i, "Gender", e.target.value)
                    }} /> : value.Gender}</td>
                    <td >{value.isUpdate ? <input type="text" value={value.Status} onChange={e => {
                        this.updateFields(i, "Status", e.target.value)
                    }} /> : value.Status}</td>
                    <button onClick={() => {
                        if (value.isUpdate) {
                            this.saveUpdates(value);
                        }
                        else {
                            this.updateDetails(i)
                        }
                    }}>
                        {!value.isUpdate ? "Update" : "Save"}
                    </button>
                </tr>
            )
        })
    }





    render() {

        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>

                </tr>
                {this._renderObject()}

            </table>

        );
    }
}

export default Home;
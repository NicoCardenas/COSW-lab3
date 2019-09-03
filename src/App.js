import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./App/LoginComponent/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ForumIcon from '@material-ui/icons/Forum';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {AppForm} from "./App/AppForm/AppForm";

const LoginView = () => (
    <div>
        <Login/>
        <br/>
        <br/>
    </div>
);

const TodoView = () => (
    <div>
        <br/>
        <br/>
        <AppForm />
    </div>
);

/*const About = () => (
    <div>
        <NavBar/>
        <CoursesList/>
    </div>
);*/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    Ref(val) {
        window.location.href = val;
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <BottomNavigation showLabels className="">
                        <BottomNavigationAction label="Login" icon={<LockOpenIcon />} component={Link} to="/" />
                        <BottomNavigationAction label="To Do" icon={<ForumIcon />} component={Link} to="/todo" />
                    </BottomNavigation>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoView}/>
                    </div>
                </div>
            </Router>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;

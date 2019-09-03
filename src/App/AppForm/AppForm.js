import React from 'react';
import {TodoList} from "../TodoApp/TodoList";
import moment from "moment";
import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './AppForm.css'

export class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return (
            <div>
                <form className="Appform" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <h3>New TODO</h3>
                    <TextField
                        id="Text"
                        label="Text"
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="Priority"
                        label="Priority"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                
                                variant="inline"
                                format="DD/MM/YYYY"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={this.state.dueDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <br/>
                    <Button variant="contained" type="submit">
                        Add #{this.state.items.length + 1}
                    </Button>
                    <br/>
                    <br/>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
                <br/>
                <br/>
            </div>
        );
    };

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
            priority: '0',
            dueDate: '00/00/00'
        }));
    }

}
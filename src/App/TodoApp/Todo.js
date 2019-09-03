import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export class Todo extends React.Component {

    render() {
        return (
            <TableRow key={this.props.name}>
                <TableCell align="center">{this.props.text}</TableCell>
                <TableCell align="center">{this.props.priority}</TableCell>
                <TableCell align="center">{this.props.dueDate.format('DD-MM-YYYY')}</TableCell>
            </TableRow>
        );
    }

}
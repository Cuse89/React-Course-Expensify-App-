import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit} />
            <button onClick= {this.onRemove}
               >Remove</button> 
        </div>
        )
    }
}

const mapStatetoProps = (state, props) => ({
    //this particular expense is now accessible in the EditExpensePage component via props.expense
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);
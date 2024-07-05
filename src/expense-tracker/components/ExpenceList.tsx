import React from 'react'



interface Expence{
    id:number;
    description: string;
    amount: number
    category: string;
}

interface Props{
    expenses: Expence[];
    onDelete: (id: number) => void;
}
const ExpenceList = ({expenses, onDelete}: Props) => {
    return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
           ))}
            </tbody>
        </table>

   
  )
}

export default ExpenceList
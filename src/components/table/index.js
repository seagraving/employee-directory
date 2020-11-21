import React from "react"


function Table(props) {
    return (<table class="table">
        <thead>
            <tr>
                <th scope="col">Picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.length > 0 ? props.employees.map(employee => {
                return (
                    <tr>

                        <td> <img src={employee.picture.thumbnail} /></td>
                        <td> {employee.name.first} </td>
                        <td> {employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td> {employee.cell}</td>
                    </tr>
                )
            }) :
                (
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            }



        </tbody>
    </table>)
}


export default Table;
import React from "react";

const AddTaskForm = (props) => {

    return(
        <div>
            <form onSubmit={props.submit}>
                <label>
                    Task Title:
                    <input type="text" name="Title" required onChange={(event) => props.change(event)} />
                </label>
                <br />
                <label>
                    Due Date: 
                    <input type="date" name="Deadline" required onChange={(event) => props.change(event)}/>
                </label>
                <br />
                <label>
                    Details:
                    <input type="text" name="Description" onChange={(event) => props.change(event)} />
                </label>
                <br />
                <label>
                    Priority:
                    <select name="Priority" onChange={(event) => props.change(event)} defaultValue="Low">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default AddTaskForm;
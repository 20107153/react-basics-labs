import React from "react";

const AddTaskForm = (props) => {

    return(
        <div>
            <form>
                <label>
                    <input type="Text" name="Title" required />
                </label>
                <br />
                <label>
                    Due Date: 
                    <input type="Date" name="deadline" required />
                </label>
                <br />
                <label>
                    Details:
                    <input type="Text" name="Description" />
                </label>
                    <input type="Submit" value="Submit" />
            </form>
        </div>
    )
};
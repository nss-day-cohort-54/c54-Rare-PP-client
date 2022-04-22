// imports

// def a function that will return a new category form

// const [form, updateForm] = useState()


// create a submitNewCategory button which will submit a new category to the server
  // accepts one parameter, "e"
    // e.preventDefault()
        // defines a new  variable which will be an object for the new category, "newCategory"
        // the object will have one key value pair:
            // label: form.category 
                // define a new variable, fetchOption, method will be POST, headers will be "Content-Type": "application/json"
                // convert what we're sending to the server into json body: JSON.stringify(newCategory)
        

        // post the newCategory to the Categories table in the db
        // return fetch("http://localhost:8088/categories", fetchOption) 
        
        // example:
        
        // const submitTag = (e) => {
        //     e.preventDefault()
        //     const newCategory = {
        //         label: form.label,
        //     }
        //     const fetchOption = {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(newCategory)
        //     }
        
        //     return fetch("http://localhost:8088/categories", fetchOption)
        // }



// return 
    // wrap in div className "form-group"
        // <label htmlFor="category" "create a new category" as text for label
        // input category
            // required autoFocus
            // type="text" id="category"
            // className="form-control"
            // placeholder="add text"
                // add an onChange function to update what we will send to the server as the user types
                    // accepts a parameter "e" 
                    //  => function body:
                        // defines a new variable, copy, which is equal to { ...form}
                        // set copy.label equal to e.target.value
                        // change the value of form by using updateForm and passing in copy as an argument
                        
                        // example:
                        
                        // <fieldset>
                        // <div className="form-group">
                        //     <label htmlFor="category">Create a new category</label>
                        //     <input
                        //         required autoFocus
                        //         type="text" id="category"
                        //         className="form-control"
                        //         placeholder="add text"
                        //         onChange={
                        //             (e) => {
                        //                 const copy = { ...form }
                        //                 copy.label = e.target.value
                        //                 updateForm(copy)
                        //             }
                        //         }
                        //     />
                        // </div>
                        // </fieldset>

                        
// add a button, which when clicked will invoke the submit new category function from the top of this module
/* <button onClick={submitNewCategory} className="submit-button">
                    Submit
                </button> */


// form
const form = document.createElement("form")
form.action = "#"

// button "Delete All"
const buttonDelete = document.createElement("input")
buttonDelete.classList = ["delete"]
buttonDelete.type = "button"
buttonDelete.value = "Delete All"

// button "Add" 
const buttonAdd = document.createElement("input")
buttonAdd.type = "button"
buttonAdd.classList = ["add"]
buttonAdd.value = "Add"

// input type = "text"
const inputHeader = document.createElement("input")
inputHeader.classList = ["enterToDo"]
inputHeader.type = "text"
inputHeader.placeholder = "Enter todo..."

form.append(buttonDelete, inputHeader, buttonAdd)

export { form, buttonDelete,buttonAdd,inputHeader }



import { createArticle } from "./createArticle";

//addToDo() ----------------------------------------------------------------
function addToDo(id, date, title, text, isChecked) {

        //toDoList
        const toDoList = document.createElement("div")
        toDoList.id = id
        toDoList.classList = ["toDoList"]
        //toDoInner
        const toDoInner = document.createElement("div")
        toDoInner.classList = ["toDoInner"]
        //"checkbox"
        const inputCheck = document.createElement("input")
        inputCheck.type = "checkbox"
        inputCheck.classList = ["checkbox"]
        inputCheck.checked = isChecked
        //divData: buttonX + дата
        const divData = document.createElement("div")
        divData.classList = ["divData"]
        //buttonX
        const buttonX = document.createElement("input")
        buttonX.classList = ["buttonX"]
        buttonX.type = "button"
        buttonX.value = "X"
        //дата
        const dateEl = document.createElement('div')
        const date1 = (new Date()).toISOString().slice(0, 10)
        dateEl.textContent = date1
        dateEl.className = "dateEl"

        divData.append(buttonX, dateEl)

        toDoInner.append(inputCheck, createArticle(`TITLE ${++articleCounter}`, text), divData)

        toDoList.append(toDoInner)

        return toDoList
}
let articleCounter = 0

export { addToDo }

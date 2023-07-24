
import { toDoContainer } from "../script";
import { store } from "../StoreKey";
import { inputHeader } from "../upper block";
import { addToDo } from "../addToDo";

//1. добавить карточки  ***************************
function getToDoList() {

        const id = Date.now()
        const date = (new Date()).toISOString().slice(0, 10)

        const taskObj = ({
                id: id,
                date: date,
                text: inputHeader.value,
                isChecked: false,
        })

        store.todoList.push(taskObj)
        store.counter = store.todoList.length

        toDoContainer.append(addToDo(taskObj.id, taskObj.date, taskObj.title, taskObj.text))
}

export { getToDoList }

import { toDoContainer } from "./script";
import { addToDo } from "./addToDo";

//ключ
const todos_KEY = "todos_KEY"
//значение ОБЪЕКТ (кортеж=ключ:значение)
let store = {
    todoList: [],
    counter: 0
}
// 5. сохранили пару ключ:значение в localStorage  **********
window.addEventListener('beforeunload', () => {
    localStorage.setItem(todos_KEY, JSON.stringify(store))
})

window.addEventListener('load', () => {
    const data = JSON.parse(localStorage.getItem(todos_KEY))
    console.log(data)

    if (data) { store = data }

    store.todoList.forEach(todo => {
        const newTodoList = addToDo(todo.id, todo.date, todo.title,
            todo.text, todo.isChecked)
        
        if (todo.isChecked === true) {
            newTodoList.querySelector(".textElement").classList.toggle('inputCheck')
        }
        toDoContainer.append(newTodoList)
    })
})

export { todos_KEY, store }


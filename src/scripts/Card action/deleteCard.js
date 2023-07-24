

import { store } from "../StoreKey";

const deleteToDoList=(e) => {

    if (e.target.closest('.buttonX')) {
        const todoItem = e.target.closest('.toDoList')
        todoItem.remove()

        const currentTodoListId = e.target.closest('.toDoList').id
        console.log(store)

        const index = store.todoList.findIndex(item => item.id == currentTodoListId)
        store.todoList.splice(index, 1)
        store.counter = store.todoList.length
        console.log(store)
    }
}

export { deleteToDoList}

import { store } from "../StoreKey";
import { toDoContainer } from "../script";

const deleteAllToDoLists = () => {
    //toDo.remove() - удаляется контейнер без возможности добавлять новые записи
    toDoContainer.innerHTML = null
    store.todoList = []
}

export { deleteAllToDoLists }
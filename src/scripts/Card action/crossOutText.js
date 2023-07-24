
import { store } from "../StoreKey";

// 4. перечеркнуть текст  ************************************

const crossOutArticleText = (e) => {
    const crossOutArticleText1 = e.target.closest('.toDoInner').querySelector(".textElement")
    crossOutArticleText1.classList.toggle("inputCheck")

    const checkedItem = e.target.closest('.toDoList').id
    for (let i = 0; i < store.todoList.length; i++) {
        if (store.todoList[i].id == checkedItem && store.todoList[i].isChecked === true) {
            store.todoList[i].isChecked = false
        } else
            if (store.todoList[i].id == checkedItem && store.todoList[i].isChecked === false) {
            store.todoList[i].isChecked = true
        }
    }
}

export { crossOutArticleText }
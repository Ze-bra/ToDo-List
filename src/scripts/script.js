"use strict"

import { form, buttonDelete, buttonAdd } from "./upper block";
import { getToDoList } from "./Card action/getCard";
import { store, localStorageGetItem, localStorageSetItem } from "./StoreKey"
import { crossOutArticleText } from "./Card action/crossOutText";
import { deleteToDoList } from "./Card action/deleteCard";
import { deleteAllToDoLists } from "./Card action/deleteAllCards";

//div id="root"
const root = document.createElement("div")
root.id = "root"
document.body.prepend(root)

//div class="wrapper"
const wrapper = document.createElement("div")
wrapper.classList = ["wrapper"]
root.append(wrapper)

wrapper.append(form)

// toDoContainer
const toDoContainer = document.createElement("div")
toDoContainer.classList = ["toDoContainer"]
wrapper.append(toDoContainer)

//1. добавить карточки  ***************************
buttonAdd.addEventListener("click", getToDoList)

// 2. удалить все карточки  *********************************
buttonDelete.addEventListener("click", deleteAllToDoLists)

// 3. удалить конкретную карточку  **************************
toDoContainer.addEventListener('click', deleteToDoList)

// 4. перечеркнуть текст  ************************************
toDoContainer.addEventListener("click", crossOutArticleText)

// 5. сохранили пару ключ:значение в localStorage  **********
window.addEventListener('beforeunload', localStorageSetItem)

window.addEventListener('load', localStorageGetItem)

//-----------------------the end---------------------------

export { toDoContainer, buttonAdd }
export { toDoList, toDoInner, inputCheck }
export { titleElement, textElement, dateElement }


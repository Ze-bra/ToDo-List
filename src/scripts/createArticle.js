
//createArticle() ---------------------------------------------
function createArticle(title, text) {
        //создать одну статью
        const article = document.createElement('div')
        article.className = "article"
        //заголовок
        const titleElement = document.createElement('h2')
        titleElement.textContent = title
        //техт
        const textElement = document.createElement('div')
        textElement.textContent = text
        textElement.className = "textElement"
        //дата
        const dateElement = document.createElement('div')
        const date = (new Date()).toISOString().slice(0, 10)
        dateElement.textContent = date
        dateElement.className = "data"

        article.append(titleElement, textElement, dateElement)

        return article
}

export { createArticle }


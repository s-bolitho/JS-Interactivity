console.log('Hello World')

document.querySelector('form').addEventListener('submit', addMovie)
const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ''

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    deleteButton.addEventListener('click', deleteMovie)
    movie.appendChild(deleteButton)
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched`
    } else {
        message.textContent = `${event.target.textContent} unwatched :(`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 2000)
}
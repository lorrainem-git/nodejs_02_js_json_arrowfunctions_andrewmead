const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const personJSON = dataBuffer.toString()
const person = JSON.parse(personJSON)
person.name = 'Maximillian'
person.age = '35'
const newPersonJSON = JSON.stringify(person)
fs.writeFileSync('1-json.json',newPersonJSON)

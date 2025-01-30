// js before react js


// logical and (&&) checks both value if one is false everything is false.,
// logical OR (||) either one is true returns true.,


// template literals

let name1 = "Arun"
let name2 = "Vasu"


// console.log(`your first name is ${name1} and your second name is ${name2}`)

// object destructuring

const obj = {
  id: 1,
  title: 'hi',
  desc: "hello world"
}

// const getId = obj.id
// console.log(getId)
// const {id, title} = obj
// console.log(id)
// console.log(title)


// array destructuring


const arr = [1,2,3];

const [firstElem, secondElem, thirdElem, fourthElem] = arr
console.log(firstElem, secondElem, thirdElem, fourthElem) // --> when we are accessing an element that not present in an array it will give undefined


// default parameters


function sum(num1 = 2, num2 = 2) {
  return num1 * num2
}

// console.log(sum()) // --> when we did not pass anything as an argument it takes default....


const array = [1,2,3,4]
const array2 = [5,6,7,8]
// console.log([222, ...array, ...array2])


// es 6 array methods

/*




*/

const personInfo = [
  {
    name: 'person 1',
    age: 22,
    city: "mountain view"
  },
  {
    name: 'person 2',
    age: 26,
    city: "silicon valley"
  },
  {
    name: 'person 3',
    age: 27,
    city: "santa clara"
  },

]


// map creating a new array // for each do action in a single array
let getAllPersons = personInfo.map((value, index) => {
  return value.city
})

// event though we have 2 ages but once the condtiton satisfies it automatically return
let getPersonsAge = personInfo.find((value, index) => {
  return value.age >= 25
})

// filter

let filteringPersonsAge = personInfo.filter((value, index) => {
  return value.age > 25;
})
console.table(filteringPersonsAge)

let addAllAges = personInfo.reduce((value, age) => {
  return value
})


// some --> check any condition is true 
// every --> checks every condition is true otherwise it returns false



// let quotes = document.getElementById('quotes');

// function renderQuote(getQuote) {
//   quotes.innerHTML = getQuote.map((singleQuote) => `<p>${singleQuote.quote}</p>`).join(" ")

// }


// async function getQuotes() {
//   try {
//     const response = await fetch("https://dummyjson.com/quotes", {
//       method: 'GET'
//     })
//     const data = await response.json()

//     if(data.quotes.length > 0) renderQuote(data.quotes)
//     console.log(data);

//   } catch (error) {
//     console.log(error)
//   }
// }
// getQuotes() 





let author = document.getElementById('quotes')
function renderAuthor(authorName) {
  author.innerHTML = authorName.map((singleAuthor) => `<p>${singleAuthor.author}</p>`)
}

async function getAuthor() {
  try {
    const response = await axios.get("https://dummyjson.com/quotes")

    console.log(response)
    const data = await response.data;
    console.log(data)
    if(data.quotes.length > 0) renderAuthor(data.quotes)
  } catch (error) {
    console.log(error)
  }
}

getAuthor()
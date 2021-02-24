// REDUCE

// let a = [1, 4, 5, 2, 2, 8, -9, 11]

// let max = a[0]

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i]
//     }
// }


// let b = a.reduce((prev, item, index) => prev > item ? prev: item)
// let c = a.reduce((prev, item, index) => prev > item ? prev: [index,item], [0, a[0]])[0]


// const data = [[1, 2, 3], 
//     [3, 4, 5], 
//     [5, 6, 7],]

// let flat = data.reduce((prev, item, index, array) => prev.concat(item))

// console.log(flat)
// console.warn(flat)
// console.table(flat)
// console.dir(flat)
// console.error(flat)


// JUN/MID

// const a = Array.apply(null, {length: 100}).map(Number.call, Number)

// JUN
// const b = a.filter(item => !(item%3)).length

// MID
// let count = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) count++
// }


// let count = 0;
// for (let i = 0; i < 100; i+= 3) count++



// let a = 11, b = 17

// if (a < b) {
//     let c = a;
//     a = b
//     b = c

//     b = [a, a = b][0]
    
//     [a, b] = [b, a]
// }

// console.log('a' + a)
// console.log('b' + b)

// Clone array

// let a = [1, 4, 2, 3, [6, 7, 5]]
// let b = a;

// For one-dimensional

// let b = [...a]

// let b = []

// for (let i = 0; i < a.length; i++) {
    // b[i] = a[i]
    // b.push(a[i])
// }

// let b = a.map(x => x)
// let b = a.filter(x => true)

// let b = a.reduce((c, item) => {
//     c.push(item)
//     return c
// }, [])

// let b = a.slice()
// let b = a.concat([])

// let b = Array.from(a)


// For two-dimensional arrays!!!

// let b = JSON.parse(JSON.stringify(a))

// a.push("test")
// a[4].push("test")

// console.log('array a')
// console.log(a)
// console.log('array b')
// console.log(b)


// Includes

// let array = [1, 65, 91, 19, 17]

// Array.prototype.fincludes = function () {
    
// }

// function includes(element, array) {
    // for (let i = 0; i < array.length; i++) {
    //     if (+element == array[i]) {
    //         return true
    //     }
    // }

//     if (array.indexOf(element) !== -1) return true
//     return false
// }

// console.log(includes(19, array))


// Unshift function

// function unshift(b) {
//     let a = [1, 4, 5, 6, 9, 90]

//     a = [b, ...a]
//     return a
// }

// let a = unshift(37)

// console.log(unshift(37))
// console.log(a)


// Carrying

// let t = (tag, classList) => text => `<${tag} class="${classList.join(' ')}">${text}</${tag}>`

// function t(tag) {
//     return function (text) {
//         return `<${tag}>${text}</${tag}>`
//     }
// }

// let p = t('p', ['bold'])
// let elem = p('text')

// document.body.innerHTML += elem


// Recursion closure / carrying

// const add = x => y => {
//     const z = x + y;
//     console.log(x + '+' + y + '=' + z);
//     return add(z);
// };

// const a1 = add(5);

// console.log(a1(5)(5)(4));

// const res = add(1)(2)(19)(-2);

// console.log(res);

// add(x) {
//     return (y) => {
//         const z = x + y
//         return add(z)
//     }
// }


//  Map

// let myMap = new Map()

// myMap.set('0', 'a')
// myMap.set('ee', 0)
// myMap.set('z', 23)

// console.log(myMap)

// for (let [k, v] of myMap) {
//     console.log(`key: ${k}, value: ${v}` )
// }


// Function

// let summ = function sum() {
//     return 1 + 2
// }()


// Prototypes

// console.log(Object.getPrototypeOf(function () {}).__proto__)
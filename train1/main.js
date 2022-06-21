
window.addEventListener('load', () => {
    console.log('load')
    let wscreen = window.screen.width
    let hscreen = window.screen.height
    let winer = document.documentElement.clientWidth
    let hiner = document.documentElement.clientHeight
    let butt = document.querySelector('.slidebar_button')
    let slide = document.querySelector('.slidebar')
    let pos = document.querySelectorAll('.slidebar_menu')
    let head = document.querySelector('.header')
    let form = document.forms

    console.log(`${wscreen}px * ${hscreen}px`)
    console.log(`${winer}px * ${hiner}px`)

    console.log(form)
    document.addEventListener('click', (event) => {
        console.log(event.target)
        if(event.target == butt) {
            slide.classList.toggle("slidebar__active")
        } else {slide.classList.remove("slidebar__active")}
        for(let i = 0;i < pos.length; i++) {
            if(event.target == pos[i]) {
                document.documentElement.scrollTop = (hiner * i / 2)
            }
        }
    })
    document.addEventListener('scroll', (event) => {
        let sctop = document.documentElement.scrollTop
        slide.style.top = `${sctop}px`;
    })
})    









// let n = 100

// outer:for(let i = 2; i <= n; i++) {
//     for(let j = 2; j < i; j++) {
//         if(i % j == 0) continue outer
//     }
//     console.log(i)
// } 

// function getAge (age) {
//     if(age >= 18) {return alert(`let's go!!!`)}
//     let conf = confirm('do your parents aggry?')
//     if(conf) {return alert(`let's go`)}
//     alert('stay home!!!')
// }

// let age = +prompt('How old are you')

// getAge(age)

// let conf = prompt('yes or no')
// let like = 'like'
// let user = {
//     name: 'bob',
//     age: 30,
//     [like + 'gdfgfdg']: conf
// }



// console.log(user)


        

        // for(let i = 0; i < pos.length; i++) {
        // }
        // console.log()
//     })
// })


// let a = confirm('sadfadsfads')
// console.log(a)

// let b = +prompt('enter a value')
// let c = +prompt('enter b value')
// let d = confirm(b + c)
// d == true ? alert('ok') : alert('full')




// let arr = [5, 3, 8, 1];
// function filterRange(arr, a, b) {
//     return arr.filter((item) => (a <= item && item <= b))
// }
// console.log(filterRange(arr, 1, 4))

// let str1 = ("background-color") 

// function camelize(str) {
//     return str.split('-')
//     .map((item, index) => {
//         return index == 0 ? item : item[0].toUpperCase() + item.slice(1)
//     })
//     .join('')
    
// }

// console.log(camelize(str1))





// console.log(str1)

// arr1 = [100, 44, 64, -9, 2, -3, 35, 23, -34, 34, 98, -34, -43, 66, 44, -324 ,324, 323, 2, -1, 2, 3, -9]
// arr2 = [2, -1, 2, 3, -9]

// getMaxSubSum(arr1)

// function getMaxSubSum(arr) {
//         let b = 0
//         let c = 0
//         arr.map((item) => {
//         item < 0 ? b = 0 : b += item
//         c = Math.max(b, c) 
//     })
//     console.log(c)
// }

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//     for (let item of arr) { 
//       partialSum += item;
//       maxSum = Math.max(maxSum, partialSum);
//       if (item < 0) partialSum = 0;
//     }
//     return maxSum;
//   }

  
// console.log(a)
// console.log(arr[0])



// let inp = document.querySelector('.inp')
// let out = document.querySelector('.out')

// let num = 1e9
// let float = Math.random() * 100 + 1

// console.log(float)

// let float1 = +float.toFixed(1)

// console.log(float1)


// console.log((0.1 + 0.2).toFixed(20))

// let word = 'klda jsfkl sjdf kj'
// let backs = '$120.95 '
// let i = 0

// console.log(Array.from(word))

// let arr = new Array(word)

// let arr2 = [word]

// console.log(arr)
// console.log(backs)

// let w = word[i++]

// for(let char of word) {

//     console.log(Array.from(char))
 
// }
// 


// function obmenka(srt) {
//     console.log(+srt.slice(1))
// }
// obmenka(backs)



// }
// console.log(word.includes('daj'))

// console.log(word.slice(0, 5))
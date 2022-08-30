//function which iterates through each character of a string and removes the spaces
function noSpace(x){
    let newStr = ''
    for (let i of x) {
      if (i === ' ') {
        i.del
      } else {
        newStr += i
      }
    }
    return newStr
    }

console.log(noSpace('h i i there   ')) // => 'hiithere'
console.log(noSpace('    just   so you k n o w   ')) // => 'justsoyouknow'
Problem: Given a string made up of the following brackets: () [] {}, determine whether the brackets properly match.

function brackets(string){
const brack = {
  "{": "}",
  "[": "]",
  "(": ")",
}

const endBrack = {
  "}": true,
  "]": true,
  ")": true
}

const stack = []

for(const el of string){
  if(endBrack[el]){
    if(stack.length === 0) return false
    const value = stack.pop()
    if(brack[value] != el){
      return false;
    }
  }else {
    stack.push(el)
  }

}

return stack.length === 0;
}


console.log(brackets("(({]}))"))

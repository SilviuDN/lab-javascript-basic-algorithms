console.log("I'm ready!");

const hacker1 = "John"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Jane"
console.log(`The navigator's name is ${hacker2}`)

const driverNameLen = hacker1.length
const navigatorNameLen = hacker2.length

if (driverNameLen > navigatorNameLen) {
  console.log(`The driver has the longest name, it has ${driverNameLen} characters.`)
}
else if (driverNameLen == navigatorNameLen) {
  console.log(`Wow, you both have equally long names, ${driverNameLen} characters!`)
}
else {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLen} characters.`)
}

let dStr = ''
let nStr = ''
for (let i = 0; i < driverNameLen; i++) {
  dStr += hacker1[i].toUpperCase()
  if (i == driverNameLen - 1) continue
  dStr += ' '
}

console.log(dStr)

for (let i = navigatorNameLen - 1; i >= 0; i--) {
  nStr += hacker1[i].toLowerCase()
  if (i == 0) continue
  nStr += ' '
}

console.log(nStr)

let shortestName = Math.min(driverNameLen, navigatorNameLen)
console.log(shortestName)

let compare = 'even'
for (let i = 0; i < shortestName; i++) {
  if (hacker1[i] > hacker2[i]) {
    compare = 'driver'
    break
  }
  else if (hacker1[i] < hacker2[i]) {
    compare = 'navigator'
    break
  }
}

switch (compare) {
  case 'driver':
    console.log(`The driver's name goes first.`);
    break;
  case 'navigator':
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  default:
    console.log(`What?! You both have the same name?`);
}

let compare2 = hacker1.localeCompare(hacker2)

switch (compare2) {
  case 1:
    console.log(`The driver's name goes first.`);
    break;
  case -1:
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  default:
    console.log(`What?! You both have the same name?`);
}

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac metus ultrices diam molestie sagittis et sit amet turpis. Fusce convallis sagittis orci, sed ullamcorper nulla finibus sed. Aliquam sit amet felis dignissim, sagittis mi a, fermentum urna. Curabitur quis rutrum nibh. Cras accumsan mi ipsum, molestie laoreet elit tincidunt ullamcorper. Nunc placerat efficitur hendrerit. Aliquam tincidunt nec sapien ac vestibulum. Mauris ac nulla ornare, porttitor augue ac, dignissim turpis. Phasellus maximus elit ante, vitae venenatis odio malesuada vel. Aliquam eleifend sollicitudin ante quis molestie. Maecenas sit amet finibus ante.`

function wordCount(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      count++
    }
  }
  return count
}

console.log(`The text has ${wordCount(longText)} words.`)

console.log( longText.indexOf('et'))

function wordSearch(str, word) {
  let count = 0
  while (str.indexOf(word) !== -1) {
    count++
    index = str.indexOf(word) + 1
    str = str.substring(index)
    console.log(index)
  }
  return count
}

console.log(`The text has ${wordSearch(longText, 'et')} appearences of 'et'.`)

let phraseToCheck
let wordsToCheck = [ "AManAPlanACanalPanama", "AmorRoma", "Aadfsgd" ]

function isPalindrome( word ){
  let wordLength = word.length
  word = word.toLowerCase()
  let isPalindrome = true
  for( let i=0; i<wordLength/2; i++){
    if (word[i] !== word[wordLength-i-1]){
      isPalindrome = false
      // console.log(word[i], word[wordLength-i-1])
      break
    }
  }
  return isPalindrome
}

wordsToCheck.forEach( word => {
  if (isPalindrome(word)){
    console.log(`'${word}' este palindrom`)
  }else{
    console.log(`'${word}' nu este palindrom`)    
  }
})

function extractLetters( phrase ){
  return phrase.replace(/[^a-zA-Z]+/g,"")
}

console.log(extractLetters("aasd adfsadsf."))

let phrasesToCheck = [ "A man, a plan, a canal, Panama!", "Amor, Roma", "Aad fsgd." ]

phrasesToCheck.forEach( word => {
  if (isPalindrome(extractLetters(word))){
    console.log(`'${word}' este palindrom`)
  }else{
    console.log(`'${word}' nu este palindrom`)    
  }  
})


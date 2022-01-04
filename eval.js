// eval.js

import {
  score,
  rate,
  average
} from './src/main.js'

const scoring = [80, 20]
const rating = [134055, 57472, 143135, 365957, 1448459]

console.log(`score(${scoring.join(', ')}) // => ${score(...scoring)}`)
console.log(`average([${rating.join(', ')}]) // => ${average(rating)}`)
console.log(`rate([${rating.join(', ')}]) // => ${rate(rating)}`)

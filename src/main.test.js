// main.test

/* eslint-env jest */

import {
  score,
  average,
  rate
} from './main'

const scoreSamples = [
  {
    p: 0,
    n: 1,
    e: 0
  }, {
    p: 0,
    n: 5,
    e: 0
  }, {
    p: 0,
    n: 10,
    e: 0
  }, {
    p: 0,
    n: 20,
    e: 0
  }, {
    p: 0,
    n: 100,
    e: 0
  }, {
    p: 0,
    n: 1000,
    e: 0
  }, {
    n: 0,
    p: 1,
    e: 0.21
  }, {
    n: 0,
    p: 5,
    e: 0.57
  }, {
    n: 0,
    p: 10,
    e: 0.72
  }, {
    n: 0,
    p: 20,
    e: 0.84
  }, {
    n: 0,
    p: 100,
    e: 0.96
  }, {
    n: 0,
    p: 1000,
    e: 1
  }, {
    n: 1,
    p: 1,
    e: 0.09
  }, {
    n: 5,
    p: 5,
    e: 0.24
  }, {
    n: 500,
    p: 500,
    e: 0.47
  }, {
    n: 1000,
    p: 1000,
    e: 0.48
  }
]

const ratingSamples = [
  {
    rating: [0, 0, 0, 0, 0],
    expect: {
      average: 0,
      score: 0
    }
  }, {
    rating: [1, 1, 1, 1, 1],
    expect: {
      average: 3.0,
      score: 0.17
    }
  }, {
    rating: [2, 2, 2, 2, 2],
    expect: {
      average: 3.0,
      score: 0.24
    }
  }, {
    rating: [3, 3, 3, 3, 3],
    expect: {
      average: 3.0,
      score: 0.27
    }
  }, {
    rating: [4, 4, 4, 4, 4],
    expect: {
      average: 3.0,
      score: 0.3
    }
  }, {
    rating: [5, 5, 5, 5, 5],
    expect: {
      average: 3.0,
      score: 0.32
    }
  }, {
    rating: [5, 4, 3, 2, 1],
    expect: {
      average: 2.3,
      score: 0.15
    }
  }, {
    rating: [5, 0, 0, 0, 5],
    expect: {
      average: 3.0,
      score: 0.24
    }
  }, {
    rating: [5, 0, 0, 4, 5],
    expect: {
      average: 3.3,
      score: 0.33
    }
  }, {
    rating: [5, 4, 0, 0, 5],
    expect: {
      average: 2.7,
      score: 0.21
    }
  }, {
    rating: [0, 0, 0, 0, 5],
    expect: {
      average: 5,
      score: 0.57
    }
  }, {
    rating: [0, 0, 0, 4, 5],
    expect: {
      average: 4.6,
      score: 0.56
    }
  }, {
    rating: [0, 0, 3, 4, 5],
    expect: {
      average: 4.2,
      score: 0.51
    }
  }, {
    rating: [0, 2, 3, 4, 5],
    expect: {
      average: 3.9,
      score: 0.45
    }
  }, {
    rating: [1, 2, 3, 4, 5],
    expect: {
      average: 3.7,
      score: 0.42
    }
  }, {
    rating: [9524, 4158, 10177, 25971, 68669],
    expect: {
      average: 4.2,
      score: 0.79
    }
  }, {
    rating: [134055, 57472, 143135, 365957, 1448459],
    expect: {
      average: 4.4,
      score: 0.84
    }
  }
]

const customRangeSamples = [
  {
    input: [3, 4, 2, 6, 12, 46, 134, 213, 116, 91, 45, 15, 58, 96, 1654],
    expect: 0.85
  },
  {
    input: [3, 4, 2, 6, 12, 46, 134, 213, 116, 91],
    expect: 0.74
  },
  {
    input: [1311, 655, 1008, 1847, 4685, 13522, 31570, 34238, 18180, 11029],
    expect: 0.72
  },
  {
    input: [125, 166, 17, 290, 400, 310],
    expect: 0.62
  },
  {
    input: [125, 166, 17, 290, 400, 310, 1800],
    expect: 0.79
  }
]

test('Testing `score()` method', () => {
  scoreSamples.forEach((sample) => {
    const actual = score(sample.p, sample.n)
    expect(sample.e === actual).toBeTruthy()
  })
})

test('Testing `average()` method', () => {
  ratingSamples.forEach((sample) => {
    const actual = average(sample.rating)
    expect(sample.expect.average === actual).toBeTruthy()
  })
})

test('Testing `rate()` method', () => {
  ratingSamples.forEach((sample) => {
    const actual = rate(sample.rating)
    expect(sample.expect.score === actual).toBeTruthy()
  })
})

test('Testing `rate()` method with custom range', () => {
  customRangeSamples.forEach((sample) => {
    const actual = rate(sample.input)
    expect(sample.expect === actual).toBeTruthy()
  })
})

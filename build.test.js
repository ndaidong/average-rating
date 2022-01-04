// release.test

/* eslint-env jest */

import {
  existsSync,
  readFileSync
} from 'fs'

const pkg = JSON.parse(readFileSync('./package.json'))

const esmFile = `${pkg.name}.esm.js`
const cjsFile = `cjs/${pkg.name}.js`
const minFile = `${pkg.name}.min.js`

const runtest = (fname) => {
  const fpath = `./dist/${fname}`
  describe(`Validate ${fname} version output`, () => {
    test(`Check if ${fpath} file created`, () => {
      expect(existsSync(fpath)).toBeTruthy()
    })
    const constent = readFileSync(fpath, 'utf8')
    const lines = constent.split('\n')
    test('Check if file meta contains package info', () => {
      expect(lines[0].includes(`${pkg.name}@${pkg.version}`)).toBeTruthy()
      expect(lines[0].includes(pkg.author)).toBeTruthy()
      expect(lines[0].includes(pkg.license)).toBeTruthy()
    })
  })
  return fpath
}

const arr = [
  esmFile,
  cjsFile,
  minFile
]

arr.forEach((fname) => {
  runtest(fname)
})

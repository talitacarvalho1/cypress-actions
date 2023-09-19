const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUwYjY1MzczLTAxNDAtNDRjMy04MDZhLTI5OGFiYzNiYjUxMS0xNjk1MTI0NjUyNjIzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTM5ZWJkYzAtYTEwMy00MThjLWJhZDQtNDg3ZTM5MDY1MTJiIiwidHlwZSI6InQifQ.OGB8ErHPYrrPzFeU4tJRHqu0WDNbwHzzH2zrBBBg9DU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})

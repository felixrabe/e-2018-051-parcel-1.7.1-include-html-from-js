import otherPage from './other-no-js.html'

document.body.appendChild(document.createElement('div'))
  .textContent = `otherPage: ${JSON.stringify(otherPage)}`
console.log('yay', otherPage)

import document from './document'

function render (html) {
  const container = document.createElement('div')
  container.innerHTML = html
  return {container}
}

export {render}

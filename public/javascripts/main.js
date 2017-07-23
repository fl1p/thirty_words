$(document).ready(function () {
  console.log('Test')

  const input = document.querySelector('#searchInput')
  let timer
  const waitInterval = 2000

  input.addEventListener('keyup', function () {
    clearTimeout(timer)
    timer = setTimeout(doneTyping, waitInterval)
  })

  input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      doneTyping()
    } else {
      clearTimeout(timer)
    }
  })

  function doneTyping () {
    console.log(input.value)
  }
})

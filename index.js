const user = localStorage.getItem('user')

const pass = localStorage.getItem('password')

const [messageElem, signInButton, signUpButton ] = ['message', 'signIn', 'signUp']
  .map((id) => document.getElementById(id))

fetch(`http://localhost:3000/users?login=${user}`)
  .then((response) => response.json())
  .then((response) => {
    if (response[0].password === pass) {
          messageElem.innerHTML = '<h1>Hello</h1>'
    } else {
          messageElem.innerHTML  = '<h1>Go to registration form</h1>'
          signInButton.disabled = false
          signUpButton.disabled = false
        }
      })

  signUpButton.onclick = function(event) {
    const script = document.body.appendChild(document.createElement('script'))
    script.src = './signUp.js'
  }
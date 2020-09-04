const loadform = async () => {
  const html = await (await fetch('https://llasik.github.io/try/tests/resourses/form.html')).text()
    document.body
      .appendChild(document.createElement('main'))
        .innerHTML = html
  const [login, password, avatar, submit, picture] = ['login', 'password', 'avatar'].map((id) => document.getElementById(id))
  login.onchange = function(event) {
  	fetch(`http://localhost:3000/users?login=${event.target.value}`) 
  	  .then((response) => response.json())
  	  .then((response) => {
  	  	if (response.length === 0) {
  	  		event.target.style.color = 'green'
  	  		password.disabled = false
  	  	} else {
  	  		event.target.style.color = 'red'
  	  		password.disabled = true
  	  	}
  	  })
  } 
  password.onchange = function(event) {

  }
  submit.onclick = function(event) {
  	fetch('http://localhost:3000/users', {
  		method: 'POST',
  		headers: {
  			'Content-Type': 'application/json'
  		},
  		body: JSON.stringify({
  			login: login.value,
  			password: password.value
  			avatar: picture.src
  		})
  	}).then((response) => console.log(response.status))
  }   
  avatar.onchange = function(event) {
  	if (event.target.files[0].type.indexOf('image') !== 0) {
      console.warn('Invalid file type')
  	} else {
  		const reader = new FileReader
  		reader.onload = function(event) {
  			picture.src = reader.result
  		}
  	}
  } 
}
loadform()
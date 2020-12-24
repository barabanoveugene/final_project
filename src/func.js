

export const checkCapslockOffOn = () => {
	const login_err = document.getElementById('login_err')
	userLogin.onkeyup = function (event) { 				//вместо userLogin указать input не работает
		if (event.getModifierState('CapsLock')) {
			login_err.style.display = 'block'
		} else login_err.style.display = 'none'
	}
}
checkCapslockOffOn()





// export const loadForm = () => {
// 	let login
// 	let pass
// 	let email
// 	let avatar

// 	const btnFormErrorClose = document.getElementById('btn_close')
// 	const btnSingUpClose = document.getElementById('btn_close_singUp')
// 	const containerSingUp = document.getElementById('container_popUp_singUp') //delete
// 	const formSingUp = document.getElementById('form_singUp')


// 	btnFormErrorClose.onclick = function (event) {
//   		form_error.style.display = 'none'
// 	}
// 	btnSingUpClose.onclick = function (event) {
// 		containerSingUp.style.display = 'none'
// 		formSingUp.reset()
// 	}

// 	userLogin.onchange = function (event) {
// 		if(localStorage.getUsers('user').find(item => item['login'] === event.target.value)) {
// 			event.target.style.background = '#FA8072'
// 		} else {
// 			event.target.style.background = '#00FF7F'
// 			login = event.target.value
// 			localStorage.setUsers('login', login)
// 		}
// 	}

// 	userPassword.onchange = function (event) {
// 		if (event.target.value.match(/[\dA-Z]+/g) && event.target.value.length >= 7) {
// 			password_err.style.display = 'none'
// 			pass = sha256(event.target.value)
// 			localStorage.setUsers('password', pass)
// 			console.log('Good password')
// 			console.log(`pass: ${event.target.value}  Sha256: ${pass}`)
// 		}else {
// 			password_err.style.display = 'block'
// 			console.log(sha256(event.target.value))
// 		}
// 	}

// 	userEmail.onchange = function (event) {
// 		email = event.target.value
// 		localStorage.setUsers('email', email)
// 	}

// 	userAvatar.onchange = function (event) {
// 		const file = event.target.files[0]
//   		if (file.type.indexOf('image') === 0) {
//     		const reader = new FileReader
//     		icon_avatar.style.display = 'block'
//     		reader.onload = function (ev) {
//     			icon_avatar.src = reader.result
//     			avatar = icon_avatar.src
//     			localStorage.setUsers('avatar', avatar)
//     		}
//     		reader.readAsDataURL(file)
//     		label_userAvatar_text.style.display = 'none'
//     		p_err.style.display = 'none'
//   		}
//   		else {
//   			p_err.style.display = 'block'
//   			label_userAvatar_text.style.display = 'none'
//   		}
// 	}

// 	btn_submit.onclick = function (event) {
// 		event.preventDefault()
// 		const sample = async () => {
// 			let response = await fetch('http://localhost:3000/user', {
// 				method: 'POST',
// 				headers : {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify({
// 					login: localStorage.getUsers('login'),
// 					password: localStorage.getUsers('password'),
// 					email: localStorage.getUsers('email'),
// 					time: new Date().toLocaleString(),
// 					avatar: icon_avatar.src
// 				})
// 			})
// 			if(response.status >= 200 && response.status <=299 ) {
// 				document.location.href = 'index.html'
// 			}
// 		}
// 		(login && pass && email && avatar) ? sample() : form_error.style.display = 'block'
// 	}
// }
// loadForm()


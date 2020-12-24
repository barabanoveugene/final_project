import sha256 from 'js-sha256'
const makeAuthorization = () => {
	const [btnSingIn, containerPopUpSingIn, loginSingIn, passwordSingIn, btnSendSingIn, btnCloseSingIn, errorSingInLogin, errorSingInPassword] 
		= ['header__header_btn_singIn', 'container_popUp_singIn', 'singIn_login', 'singUp_password', 'btn_singIn', 'btn_close_singIn', 'error_singIn_login', 'error_singIn_password']
			.map(item => document.getElementById(item))


	// const btnSingIn = document.getElementById('header__header_btn_singIn')
	// const containerPopUpSingIn = document.getElementById('container_popUp_singIn')
	// const loginSingIn = document.getElementById('singIn_login')
	// const passwordSingIn = document.getElementById('singUp_password')
	// const btnSendSingIn = document.getElementById('btn_singIn')
	// const btnCloseSingIn = document.getElementById('btn_close_singIn')
	// const errorSingInLogin = document.getElementById('error_singIn_login')
	// const errorSingInPassword = document.getElementById('error_singIn_password')

	let login
	let pass

	const sample = () => {
		containerPopUpSingIn.style.display = 'none'
		loginSingIn.value = ''
		passwordSingIn.value = ''
	}

	btnSingIn.onclick = function (event) {
		containerPopUpSingIn.style.display = 'block'
	}

	loginSingIn.onchange = function (event) {
		if (localStorage.getUsers('user').find(item => item['login'] === event.target.value)) {
			console.log('Good')
			login = event.target.value
			errorSingInLogin.style.display = 'none'
		} else errorSingInLogin.style.display = 'block'
	}

	passwordSingIn.onchange = function (event) {
		if (localStorage.getUsers('user').find(item => item['password'] === sha256(event.target.value))) {
			console.log('Hello')
			pass = event.target.value
			errorSingInPassword.style.display = 'none'
		} else {
			errorSingInPassword.style.display = 'block'
		}
		
	}

	btnCloseSingIn.onclick = function (event) {
		// containerPopUpSingIn.style.display = 'none'
		// loginSingIn.value = ''
		// passwordSingIn.value = ''
		sample()
	}

	btnSendSingIn.onclick = function (event) {
		(login && pass) ? sample() : console.log('Иди гуляй')
		// document.getElementById('form_popUp_singIn').innerHTML = `<div id="welcome">welcome to website</div>`
		// document.getElementById('welcome').style = `
		// 	font-size: 40px;
		// 	color: #8B0000;
		// `
	}
}

export default makeAuthorization()
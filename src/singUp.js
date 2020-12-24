import sha256 from 'js-sha256'

export const loadForm = () => {
	let login
	let pass
	let email
	let avatar

	const [containerSingUp, userLogin, userPassword, userEmail, userAvatar, btnSubmit, passwordErr, iconAvatar, pErr, labelUserAvatar
		, labelUserAvatarText, formError,btnSubmitFormErrorClose, btnSingUp, btnFormErrorClose, btnSingUpClose, formSingUp]
		= ['container_popUp_singUp', 'userLogin', 'userPassword', 'userEmail', 'userAvatar', 'btn_submit', 'password_err', 'icon_avatar'
			, 'p_err', 'label_userAvatar', 'label_userAvatar_text', 'form_error', 'btn_close', 'header__header_btn_singUp'
				, 'btn_close', 'btn_close_singUp', 'form_singUp'].map(item => document.getElementById(item))

	
	btnSingUp.onclick = function (event) {
		containerSingUp.style.display = 'block'
	}

	btnFormErrorClose.onclick = function (event) {
  		formError.style.display = 'none'
	}
	btnSingUpClose.onclick = function (event) {
		containerSingUp.style.display = 'none'
		formSingUp.reset()
	}

	userLogin.onchange = function (event) {
		if(localStorage.getUsers('user').find(item => item['login'] === event.target.value)) {
			event.target.style.background = '#FA8072'
		} else {
			event.target.style.background = '#00FF7F'
			login = event.target.value
			localStorage.setUsers('login', login)
		}
	}

	userPassword.onchange = function (event) {
		if (event.target.value.match(/[\dA-Z]+/g) && event.target.value.length >= 7) {
			passwordErr.style.display = 'none'
			pass = sha256(event.target.value)
			localStorage.setUsers('password', pass)
		}else {
			passwordErr.style.display = 'block'
		}
	}

	userEmail.onchange = function (event) {
		email = event.target.value
		localStorage.setUsers('email', email)
	}

	userAvatar.onchange = function (event) {
		const file = event.target.files[0]
  		if (file.type.indexOf('image') === 0) {
    		const reader = new FileReader
    		iconAvatar.style.display = 'block'
    		reader.onload = function (ev) {
    			icon_avatar.src = reader.result
    			avatar = iconAvatar.src
    			localStorage.setUsers('avatar', avatar)
    		}
    		reader.readAsDataURL(file)
    		labelUserAvatarText.style.display = 'none'
    		pErr.style.display = 'none'
  		}
  		else {
  			pErr.style.display = 'block'
  			labelUserAvatarText.style.display = 'none'
  		}
	}

	btnSubmit.onclick = function (event) {
		event.preventDefault()
		const sample = async () => {
			let response = await fetch('http://localhost:3000/user', {
				method: 'POST',
				headers : {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					login: localStorage.getUsers('login'),
					password: localStorage.getUsers('password'),
					email: localStorage.getUsers('email'),
					time: new Date().toLocaleString(),
					avatar: icon_avatar.src
				})
			})
			if(response.status >= 200 && response.status <=299 ) {
				document.location.href = 'index.html'
			}
		}
		(login && pass && email && avatar) ? sample() : form_error.style.display = 'block'
	}
}
loadForm()
export const checkCapslockOffOn = () => {
	const login_err = document.getElementById('login_err')
	userLogin.onkeyup = function (event) {
		if (event.getModifierState('CapsLock')) {
			login_err.style.display = 'block'
		} else login_err.style.display = 'none'
	}
}
checkCapslockOffOn()

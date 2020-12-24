export const userData = async () => {
	Object.assign(Storage.prototype, {
		setUsers: function (key, object) {
			localStorage.setItem(key, JSON.stringify(object))
		},
		getUsers: function (key) {
			return JSON.parse(this.getItem(key))
		}
	})
	const resp = await ( await fetch('http://localhost:3000/user')).json()
	localStorage.setUsers('user', resp)
}
userData()

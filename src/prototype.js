Object.assign(Storage.prototype, {
	setUsers: function (key, object) {
		localStorage.setItem(key, JSON.stringify(object))
	},
	getUsers: function (key) {
		return JSON.parse(this.getItem(key))
	}
})


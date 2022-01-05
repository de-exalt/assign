function fetchData() {
	fetch(" https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
	.then(response => {
		return response.json();
	
	})
	
	.then(data => {
	console.log(data.clients);
	const html = data.clients
	.map(user => {
		return '<p>Name: ${user.name}</p>'
		
	
	})
	.join("");
	console.log(html);
	document.querySelector('#app')
	.insertAdjacentHTML("afterbegin", html);
	})
	.catch(error => {
		console.log(error);
	
	});
	
	}
	
	fetchData();
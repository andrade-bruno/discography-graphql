const query = '{ main }'

const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/JSON'
	},
	body: JSON.stringify({ query })
}

fetch('http://localhost:4000/graphql', options)
	.then(res => inner(res.data.main))
	.catch(err => console.error(err))
const express = require('express')
const app = express()

app.get('/api/data', (req, res) => {
	const data = [
		{id: 1, firstName: 'John', lastName: 'Doe'},
		{id: 2, firstName: 'Steve', lastName: 'Smith'},
		{id: 3, firstName: 'Mary', lastName: 'Swanson'}
	]

	res.json(data)
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

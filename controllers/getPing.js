const axios = require('axios');

module.exports = (req, res) => {
	axios.get('https://hatchways.io/api/assessment/blog/posts?tag=/ping')
  .then(response => {
		console.log(response.data)
		res.send(response.data ? "success" : "error")
  })
  .catch(err => {
    console.log(err);
  })
}

const axios = require('axios');

let tags = ['health','tech','startups','science','history','design','culture','politics']
let posts = []

module.exports = (req, res) => {
	tags.forEach(tag => {
		axios.get(`https://hatchways.io/api/assessment/blog/posts?tag=${tag}&sortBy=id`)
	  .then(response => {
			posts.push(response.data.posts)
			console.log(response)
	  })
	  .catch(err => {
	    console.log(err);
	  })
	})
	res.send(posts)
}

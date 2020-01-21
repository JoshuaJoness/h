const axios = require('axios');

// These are the temp storage arrays for the corresponding tags. Please note I am not 100% sure if these include ALL of the tags. I could not find a list of all the tags in the instructions and instead made multiple calls to your API to search for them. Hopefully this includes them all
let postsHealth = []
let postsTech = []
let postsStartups = []
let postsScience = []
let postsHistory = []
let postsDesign = []
let postsCulture = []
let postsPolitics = []

module.exports = (req, res) => {
	axios.get('https://hatchways.io/api/assessment/blog/posts?tag=health&sortBy=id')
  .then(response => {
		postsHealth = response.data.posts

		axios.get('https://hatchways.io/api/assessment/blog/posts?tag=tech&sortBy=id')
	  .then(response => {
			postsTech = response.data.posts

			axios.get('https://hatchways.io/api/assessment/blog/posts?tag=startups&sortBy=id')
		  .then(response => {
				postsStartups = response.data.posts

				axios.get('https://hatchways.io/api/assessment/blog/posts?tag=science&sortBy=id')
			  .then(response => {
					postsScience = response.data.posts

					axios.get('https://hatchways.io/api/assessment/blog/posts?tag=history&sortBy=id')
				  .then(response => {
						postsHistory = response.data.posts

						axios.get('https://hatchways.io/api/assessment/blog/posts?tag=design&sortBy=id')
					  .then(response => {
							postsDesign = response.data.posts

							axios.get('https://hatchways.io/api/assessment/blog/posts?tag=culture&sortBy=id')
						  .then(response => {
								postsCulture = response.data.posts

								axios.get('https://hatchways.io/api/assessment/blog/posts?tag=politics&sortBy=id')
							  .then(response => {
									postsPolitics = response.data.posts

									// Here I concat all of the arrays into one
									let arr = postsHealth.concat(postsTech).concat(postsStartups).concat(postsScience).concat(postsHistory).concat(postsDesign).concat(postsCulture).concat(postsPolitics)
									// Here I am testing by checking the length to ensure that each element in each array is being accounted for
									console.log(arr.length)
									// Here I am sorting the array, so that I can easily remove elements. I do not think that this step is completely necessary
									for (let i = 0; i<arr.length; i++) {
										for (let j = i+1; j<arr.length; j++) {
											if (arr[i].id > arr[j].id) {
												let temp = arr[i]
												arr[i] = arr[j]
												arr[j] = temp
											}
										}
									}
									// Here I am looping through each element in the array and removing all duplicates
									for (let i = 0; i<arr.length; i++) {
										for (let j = i+1; j<arr.length; j++) {
											for (let k = j+1; k<arr.length; k++) {
												if (arr[i].id == arr[j].id) {
													arr.splice(i, 1)
												}
												if (arr[j].id == arr[k].id) {
													arr.splice(j, 1)
												}
											}
										}
									}
									console.log(arr.length)
									// Here I send the filtered array in the response
									res.send(arr)
  })})})})})})})})
  .catch(err => {
    console.log(err);
  })
}

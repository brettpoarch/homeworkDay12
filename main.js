$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(formData){
		console.log(formData)

		var info = ''

		formData.results.forEach(function(value){
			value.Images.forEach(function(value){
				if(value.rank === 1){
					info += `<div class='desc'><img src=${value.url_170x135} />`
				}
			})
			info += `<p>${value.title}</p> <p>${value.Shop.shop_name + ' $' + value.price }</p></div>`
		})
		$("#app").html(`${info}`);
	})
})


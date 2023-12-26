const img = document.querySelector("img");
fetch(
	"https://api.giphy.com/v1/gifs/translate?api_key=jN94SWEULFQSXm1OS79TqSYA7DeaQEOO&s=cats",
	{
		mode: "cors",
	}
)
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		img.src = response.data.images.original.url;
	})
	.catch((e) => console.log(e));

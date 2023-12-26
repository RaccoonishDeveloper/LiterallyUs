const img = document.querySelector("img");
async function getCats() {
	const response = await fetch(
		"https://api.giphy.com/v1/gifs/translate?api_key=jN94SWEULFQSXm1OS79TqSYA7DeaQEOO&s=cats",
		{ mode: "cors" }
	);
	const catData = await response.json();
	img.src = catData.data.images.original.url;
}

getCats();

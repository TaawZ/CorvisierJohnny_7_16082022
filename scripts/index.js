const input = document.querySelector(".form-control");
const autocomplete = document.querySelector(".autocomplete");

function produceCard(data) {
	data.forEach((elt) => {
		cardFactory(elt);
	});
}

produceCard(recipes);

function cardFactory(data) {
	const wrapper = document.querySelector(".cards-wrapper");
	const card = document.createElement("div");
	const cardImg = document.createElement("img");
	const cardTitle = document.createElement("h5");
	const cardTitleIcon = document.createElement("i");
	const cardTitleContainer = document.createElement("div");
	const cookingTime = document.createElement("span");
	const timeContainer = document.createElement("div");
	const eltContainer = document.createElement("div");
	const cardInfo = document.createElement("div");
	const description = document.createElement("p");
	const descContainer = document.createElement("div");
	data.ingredients.forEach((ingredient) => {
		const span = document.createElement("span");
		const ingredients = ingredient.ingredient;
		const quantity = ingredient.quantity;
		const unit = ingredient.unit;
		if (unit) {
			span.textContent = ingredients + ": " + quantity + unit;
		} else if (!quantity) {
			span.textContent = ingredients;
		} else {
			span.textContent = ingredients + ": " + quantity;
		}
		eltContainer.appendChild(span);
	});
	eltContainer.setAttribute("class", "ingredients");
	descContainer.setAttribute("class", "bottom-card");
	cookingTime.textContent = data.time + "min";
	description.textContent = data.description;
	cardInfo.setAttribute("class", "card-body");
	card.setAttribute("class", "card");
	cardTitleContainer.setAttribute("class", "title-container");
	cardTitleIcon.setAttribute("class", "fas fa-clock");
	cardTitle.textContent = data.name;
	cardImg.setAttribute("src", "assets/cardImg.svg");
	wrapper.appendChild(card);
	card.appendChild(cardImg);
	card.appendChild(cardInfo);
	cardTitleContainer.appendChild(cardTitle);
	cardTitleContainer.appendChild(timeContainer);
	timeContainer.appendChild(cardTitleIcon);
	timeContainer.appendChild(cookingTime);
	cardInfo.appendChild(cardTitleContainer);
	cardInfo.appendChild(descContainer);
	descContainer.appendChild(eltContainer);
	descContainer.appendChild(description);
}

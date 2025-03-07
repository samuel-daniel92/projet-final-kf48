const options = document.getElementsByTagName("a");
const title = document.getElementsByTagName("h1");
const details = document.getElementsByTagName("p");
const img = document.querySelector(".image");

for (let i = 0; i < options.length; i++) {
	options[i].addEventListener("click", function (event) {
		event.preventDefault();
		if (options[i].textContent.toLocaleLowerCase() == "home") {
			displayElements("Home", "téléchargement");
			options[i].classList.add("on-click");
		} else if (options[i].textContent.toLocaleLowerCase() == "contact") {
			displayElements("Contact", "téléchargement (1)");
			options[i].classList.add("on-click");
		} else if (options[i].textContent.toLocaleLowerCase() == "reservation") {
			displayElements("Reservation", "téléchargement (2)");
			options[i].classList.add("on-click");
		} else if (options[i].textContent.toLocaleLowerCase() == "boutique") {
			displayElements("Boutique", "téléchargement (3)");
			options[i].classList.add("on-click");
		}
	});
}

const displayElements = (titre, image) => {
	for (let i = 0; i < options.length; i++) {
		options[i].classList.remove("on-click");
	}
	title[0].innerHTML = titre;
	details[0].innerHTML = `Bienvenu dans la page de ${titre}`;
	img.innerHTML = `<img src ="${image}.jpeg">`;
};

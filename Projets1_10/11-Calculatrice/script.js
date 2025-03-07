const turnOn = document.getElementById("turn-on");
const turnOff = document.getElementById("turn-off");
const calcul = document.getElementById("calcul");
const result = document.getElementById("result");
const calculatrice = document.querySelector(".calculatrice");
const ecran = document.querySelector(".ecran");
const colorBtn = document.querySelectorAll(".control.color");
const equal = document.querySelector(".background");
const backSpace = document.querySelector(".col");
const control = document.querySelectorAll(".con");
const nbr = document.querySelectorAll(".control.nbr");

turnOff.addEventListener("click", () => {
	turnOnOff("on");
});
turnOn.addEventListener("click", () => {
	turnOnOff("off");
});

turnOff.classList.add("trans");
turnOn.classList.add("trans");
if (turnOff.style.display == "none") {
}

//touches pour les nombres
nbr.forEach((nombre) => {
	nombre.classList.add("trans");
	nombre.addEventListener("click", () => {
		if (turnOff.style.display == "none") {
			if (nombre != nbr[9]) {
				calcul.value = calcul.value + nombre.innerHTML;
			} else {
				let valeur = calcul.value;
				if (valeur.substring(valeur.length - 2, valeur.length) == "(-") {
					calcul.value = valeur.substring(0, valeur.length - 2);
				} else {
					calcul.value =
						calcul.value + control[2].innerHTML + control[6].innerHTML + "";
				}
			}
			let r = calculer(calcul.value);
			if (r != null) {
				result.value = r + "";
			} else {
				result.value = "";
			}
		}
	});
});
//touches de controle
control.forEach((element) => {
	element.classList.add("trans");

	element.addEventListener("click", () => {
		if (turnOff.style.display == "none") {
			element.classList.add("trans");
			if (element == control[0]) {
				backSpaces(calcul.value);
			}
			if (
				element != control[0] &&
				element != control[1] &&
				element != control[2] &&
				element != control[8]
			) {
				calcul.value = calcul.value + element.innerHTML;
			}

			if (element == control[2]) {
				let valeur = calcul.value.substring(
					calcul.value.length - 1,
					calcul.value.length
				);
				if (
					valeur != "/" &&
					valeur != "x" &&
					valeur != "-" &&
					valeur != "+" &&
					valeur != "(" &&
					valeur != ""
				) {
					calcul.value = calcul.value + "x" + element.innerHTML;
				} else {
					calcul.value = calcul.value + element.innerHTML;
				}
			}
			let r = calculer(calcul.value);
			if (element != control[8]) {
				if (r != null) {
					result.value = r + "";
				} else {
					result.value = "";
				}
			}

			if (element == control[8] && r != null) {
				calcul.value = calculer(calcul.value);
				result.value = "";
			}

			if (element == control[1]) {
				calcul.value = "";
				result.value = "";
			}
		}
	});
});

const backSpaces = (text) => {
	taille = text.trim().length;
	if (taille > 0) {
		calcul.value = text.substring(0, taille - 1);
	}
};
const turnOnOff = (even) => {
	if (even == "on") {
		turnOn.style.display = "block";
		turnOff.style.display = "none";
		calculatrice.style.backgroundColor = "rgb(5, 63, 18)";
		calculatrice.style.backgroundImage = `repeating-radial-gradient(
			circle at 0 0,
			transparent 0,
			#1e9d3c 40px
		),
		repeating-linear-gradient(#49494955, #494949)`;
		calculatrice.style.backgroundBlendMode = "multiply";
		ecran.style.backgroundColor = " rgb(61, 58, 58)";
		equal.classList.add("green");
		backSpace.classList.add("cls-1");
		colorBtn.forEach((element) => {
			element.classList.add("green");
		});
	} else {
		result.value = "";
		calcul.value = "";
		turnOn.style.display = "none";
		turnOff.style.display = "block";
		calculatrice.style.backgroundImage = "none";
		calculatrice.style.backgroundColor = "black";
		ecran.style.backgroundColor = "black";
		equal.classList.remove("green");
		backSpace.classList.remove("cls-1");
		colorBtn.forEach((element) => {
			element.classList.remove("green");
		});
	}
};

const calculer = (expression) => {
	expression = expression.replace(/,/g, ".");
	expression = expression.replace(/x/g, "*");

	try {
		const resultat = new Function("return " + expression)();
		return resultat;
	} catch (error) {
		return null;
	}
};

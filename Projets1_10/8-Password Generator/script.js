const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const passwordLength = document.getElementById("nombreCaracter");
const securePassword = document.getElementById("motDePasse");

generate.addEventListener("click", () => {
	generatePassword(passwordLength.value);
});

copy.addEventListener("click", () => {
	copierTexte();
});

function generatePassword(length) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}

	securePassword.value = password;
}

const copierTexte = () => {
	if (securePassword.value.length) {
		navigator.clipboard.writeText(securePassword.value).then(() => {
			alert("Texte copié avec succes!");
		});
	} else {
		alert("Veillez saisir le texte à copier");
	}
};

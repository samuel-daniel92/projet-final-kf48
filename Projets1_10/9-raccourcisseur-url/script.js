// apiKey = 6Xy38YtXozm69PFomXXaK5QQW0BDmcZofDUxAMPen104hOvnIlH0eDRu8diK
const userUrl = document.getElementById("url");
const btnGenerate = document.getElementById("generate");
const result = document.getElementById("result");
//
const apiKey = "6Xy38YtXozm69PFomXXaK5QQW0BDmcZofDUxAMPen104hOvnIlH0eDRu8diK";
const url = "https://api.tinyurl.com/create";

const fetchData = async (baseUrl, apiKey, dataUser) => {
	try {
		const response = await fetch(baseUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify(dataUser),
		});

		const data = await response.json();
		const tinyUrl = data.data.tiny_url;
		return tinyUrl;
	} catch (error) {
		return null;
	}
};

const main = async () => {
	const tinyUrl = await fetchData(url, apiKey, data);
	if (tinyUrl == null) {
		result.value = "Le lien n'est pas valide";
	} else {
		result.value = tinyUrl;
		console.log(url);
	}
};

btnGenerate.addEventListener("click", async () => {
	const urlk = new String(userUrl.value);
	if (urlk.trim().length < 1) {
		result.value = "Saisisez une URL valide";
	} else {
		const data = {
			url: userUrl.value,
			domain: "tinyurl.com",
			description: "for js tp",
		};
		const tinyUrl = await fetchData(url, apiKey, data);
		if (tinyUrl == null) {
			result.value = "Le lien n'est pas valide";
		} else {
			result.value = tinyUrl;
		}
	}
});

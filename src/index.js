const illuminate = (element) => {
	element.classList.add('illuminate');
	setTimeout(() => element.classList.remove('illuminate'), 1000);
};


const illuminateById = (id) => {
	const element = document.getElementById(id);

	if (!element) {
		throw Error(`Element with ${id} not found!`);
	}

	illuminate(element);
};


window.onload = () => {
	const linksElements = document.getElementsByTagName('a');

	for (const linkElement of linksElements) {
		if (!linkElement.hash) continue;
		const sectionId = linkElement.hash.substring(1);
		linkElement.onclick = () => illuminateById(sectionId);
	}
};


window.onhashchange = () => {
	const sectionId = window.location.hash.substring(1);
	illuminateById(sectionId);
};

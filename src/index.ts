const init = (selector: string) => {
	return function () {
		const planet = document.getElementById(selector);
		if (planet instanceof HTMLElement) {
			planet.innerHTML = 'Red Alert: hit by phaser fire!';
			planet.setAttribute(`style`, `color: red; font-style: italic;`);
		}
	};
};

window.addEventListener('load', init('greenplanet'));

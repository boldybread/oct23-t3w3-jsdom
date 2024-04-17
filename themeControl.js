const themes = {
	light: {
		background: "white",
		color: "darkgrey"
	},
	dark: {
		background: "blue",
		color: "#ffffff"
	}
};

function changeCssTheme(themeName){
	// themes[themeName].variable
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);

	}
}

changeCssTheme("dark");

console.log('Hello from Brad\'s code');
console.log("Hello from Brad's code");
window.onload = function() {
	const form = document.querySelector("form");
	form.onsubmit = function(event) {
		event.preventDefault();

		let voteMenu = document.getElementById("vote");
		voteMenu.setAttribute("class", "hidden");
		let under18Message = document.getElementById("under-18");
		under18Message.setAttribute("class", "hidden");

		const age = parseInt(document.querySelector("input#age").value);

		if (age > 18) {
			voteMenu.removeAttribute("class");
		} else if (age === 18) {
			window.alert("Congratulations! Participate in American democracy while it still lasts!");
			voteMenu.removeAttribute("class");
		} else {
			under18Message.removeAttribute("class");
		}
	};
};
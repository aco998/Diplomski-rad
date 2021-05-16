document.getElementById("dugme2").addEventListener("click", klikni2);

	function klikni2() {
	var text2 = document.getElementById("text-faq").innerHTML;
	if(text2.style.display == "none") {
		text2.style.display = "block";
	} else {
		text2.style.display = "none";
	}
}
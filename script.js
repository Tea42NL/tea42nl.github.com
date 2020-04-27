var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", toggleDone);
	divEle = createDiv();
	delEle = createDel();
	ul.appendChild(divEle);
	divEle.appendChild(li);
	divEle.appendChild(delEle);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	this.classList.toggle("done");
}

function removeFromList() {
	divEle = this.parentNode;
	ulEle = divEle.parentNode;
	ulEle.removeChild(divEle);
}

function createDiv() {
	return document.createElement("div");
}

function createDel() {
	block = document.createElement('button');
	block.innerHTML = "Delete";
	block.onclick = removeFromList;
	return block;
}

function wrapInDiv(item) {
	divEle = createDiv();
	item.parentNode.insertBefore(divEle,item);
	divEle.appendChild(item);
	return divEle;
}

function addDeleteButton(item) {
	item.appendChild(createDel());
}

for (i=0;i<lis.length;i++) {
	currentDiv = wrapInDiv(lis[i]);
	lis[i].addEventListener("click", toggleDone);
	addDeleteButton(currentDiv);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


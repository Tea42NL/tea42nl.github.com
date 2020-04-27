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
	spanEle = createspan();
	delEle = createDel();
	ul.appendChild(spanEle);
	spanEle.appendChild(li);
	spanEle.appendChild(delEle);
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
	spanEle = this.parentNode;
	ulEle = spanEle.parentNode;
	ulEle.removeChild(spanEle);
}

function createSpan() {
	return document.createElement("span");
}

function createDel() {
	block = document.createElement('button');
	block.innerHTML = "Delete";
	block.onclick = removeFromList;
	return block;
}

function wrapInSpan(item) {
	spanEle = createSpan();
	item.parentNode.insertBefore(spanEle,item);
	spanEle.appendChild(item);
	return spanEle;
}

function addDeleteButton(item) {
	item.appendChild(createDel());
}

for (i=0;i<lis.length;i++) {
	currentSpan = wrapInSpan(lis[i]);
	lis[i].addEventListener("click", toggleDone);
	addDeleteButton(currentSpan);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


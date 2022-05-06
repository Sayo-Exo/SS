const paragraphs = document.querySelectorAll('p');
const headers = document.querySelectorAll('h1');

paragraphs.forEach(formvar);
headers.forEach(formvar);

function formvar(element) {
  	let text = element.innerHTML;
    text = form(text, "leadership", "leader");
    text = form(text, "leader", "leader");
    text = form(text, "Ancient Egypt", "egypt");
    text = form(text, "Egypt", "egypt");
    text = formRand(text, "Mesopotamia", "meso", 5);
    text = form(text, "Monarchy", "monarchy");
    text = form(text, "Monarch", "monarchy");
    text = form(text, "Monarchist", "monarchy");
  	element.innerHTML = text;
}

function formRand(text, select, basec, max) {
    return form(text, select, `${basec}-${getRandomInt(max)}`);
}

function form(text, select, c) {
  	return text.replaceAll(select, `<span class="${c}">${select}</span>`);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

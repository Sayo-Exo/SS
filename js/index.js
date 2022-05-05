const paragraphs = document.querySelectorAll('p');
const headers = document.querySelectorAll('h1');

paragraphs.forEach(formvar);
headers.forEach(formvar);

function formvar(element) {
  	let text = element.innerHTML;
    text = form(text, "leader", "leader");
    text = form(text, "leadership", "leader");
    text = form(text, "Ancient Egypt", "egypt");
    text = form(text, "Egypt", "egypt");
    text = form(text, "Mesopotamia", "meso");
    text = form(text, "Monarchy", "monarchy");
    text = form(text, "Monarch", "monarchy");
  	element.innerHTML = text;
}

function form(text, select, c) {
  	return text.replaceAll(select, `<span class="${c}">${select}</span>`);
}

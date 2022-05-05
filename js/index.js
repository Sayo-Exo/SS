const paragraphs = document.querySelectorAll('p');
const headers = document.querySelectorAll('h1');

for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    let text = p.innerHTML;
    text = form(text, "leader", "leader");
    text = form(text, "Ancient Egypt", "egypt");
    text = form(text, "Egypt", "egypt");
    text = form(text, "Mesopotamia", "meso");
    p.innerHTML = text;
}

function form(text, select, c) {
    return text.replaceAll(select, `<span class="${c}">${select}</span>`);
}

paragraphs = document.querySelectorAll('input[type="p"]')
headers = document.querySelectorAll('input[type="h1"]')

for (int i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    let text = p.innerHTML;
    text = form(text, "leader", "leader")
    text = form(text, "Ancient Egypt", "egypt")
    text = form(text, "Egypt", "egypt")
    text = form(text, "Mesopotamia", "meso")
    p.innerHTML = text;
}

function form(text, select, c) {
    return text.replaceAll(select, `<span class="${c}">${select}</span>`)
}

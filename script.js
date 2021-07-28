let new_div = document.createElement('div');
new_div.setAttribute('class', 'dom-div');
// new_div.style.color = 'blue';

let link = document.createElement('a');
link.setAttribute('target', '_blank');
// link.classList.add('a-tag');
// link.classList.remove('a-tag');
link.setAttribute('href', 'https://github.com/Nino-Jintcharadze');
new_div.appendChild(link);

// document.body.appendChild(new_div);
document.getElementById('html-div').appendChild(new_div);
document.getElementById('html-div').innerHTML = '<p>Hello</p>'


document.querySelectorAll('.wraper').forEach( (item) => {
    let link = document.createElement('a');
    link.textContent = 'HELLO';
    link.setAttribute('target', '_blank');

    item.appendChild(link);
})
document.querySelectorAll('.wraper')[0].appendChild(new_div);
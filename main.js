let theme = localStorage.getItem('theme') || 'light';
console.log(theme);

const page2 = document.getElementById('page2');
const textblack = document.getElementById('textblack');

if (theme === 'black') {
  page2.style.backgroundColor = '#000';
  textblack.style.color = '#fff';
  page4.style.backgroundColor = '#000';
} else {
  page2.style.backgroundColor = '#fff';
  textblack.style.color = '#000';
  page4.style.backgroundColor = '#fff';
}

const black111 = document.getElementById('black111');

black111.onclick = function() {
  if (theme === 'light') {
    page2.style.backgroundColor = '#000';
    textblack.style.color = '#fff';
    page4.style.backgroundColor = '#000';
    theme = 'black';
    localStorage.setItem('theme', 'black');
  } else if (theme === 'black') {
    page2.style.backgroundColor = '#fff';
    textblack.style.color = '#000';
    page4.style.backgroundColor = '#fff';
    theme = 'light';
    localStorage.setItem('theme', 'light');
  }
};

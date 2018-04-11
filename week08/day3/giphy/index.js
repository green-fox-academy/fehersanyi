let xhr = new XMLHttpRequest();
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  xhr.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=i2tKcWB3zgJhzWZvoi1W9QS2qt7uKpDY&tag=&rating=G");
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let response = JSON.parse(xhr.responseText);
      kep = document.getElementById('gif')
      kep.src = response.data.image_url;
    }
  }
  xhr.send();
});
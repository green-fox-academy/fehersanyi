//436c7318122a405e9851771ddd7e561b

let request = new XMLHttpRequest();
request.open('GET', 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=436c7318122a405e9851771ddd7e561b', true);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    let response = JSON.parse(request.responseText);
    response.response.docs.forEach((e, i) => {
      let a = document.createElement('a');
      a.innerText = response.response.docs[i].headline.main + `\n`;
      a.href = response.response.docs[i].web_url;
      document.querySelector('body').appendChild(a);
    });
  }
}
request.send();
const containter = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'

function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);

const ul = document.createElement('ul');

window.addEventListener('hashchange', function() {
  const id = location.hash.substr(1);

  const newsContent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;
  content.appendChild(title);

});

for (let i = 0; i < 10; i++) {
  const div = document.createElement('div');
  
  div.innerHTML = `
    <li>
      <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>
  `
  ul.appendChild(div.firstElementChild);
}



containter.appendChild(ul);
containter.appendChild(content);







// 연습하기
// const containter = document.getElementById('root');
// const ajax = new XMLHttpRequest();
// const content = document.createElement('div');
// const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'


// ajax.open('GET', NEWS_URL, false);
// ajax.send();

// const newsFeed = JSON.parse(ajax.response);

// const ul = document.createElement('ul');

// window.addEventListener('hashchange', function() {
//   const id = location.hash.substr(1);

//   ajax.open('GET', CONTENT_URL.replace('@id', id), false);
//   ajax.send();

//   const newsContent = JSON.parse(ajax.response);
//   const title = document.createElement('h1');

//   title.innerHTML = newsContent.title;
//   content.appendChild(title);
//   console.log(newsContent);

// });

// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li');
//   const a = document.createElement('a');
//   a.href = `#${newsFeed[i].id}`;
//   a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;


//   li.appendChild(a);
//   ul.appendChild(li);
// }



// containter.appendChild(ul);
// containter.appendChild(content);
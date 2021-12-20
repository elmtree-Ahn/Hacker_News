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



const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'


ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);

const ul = document.createElement('ul');


window.addEventListener('hashchange', function() {
  const id = location.hash.substr(1);

  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();
  
  const newsContent = JSON.parse(ajax.response);
  console.log(newsContent);
});

for (let i = 0; i < 10; i++) {
  const a = document.createElement('a');
  const li = document.createElement('li');
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
  a.href = `#${newsFeed[i].id}`;



  li.appendChild(a);
  ul.appendChild(li);
  
}

document.querySelector('#root').appendChild(ul);






// const ajax = new XMLHttpRequest();

// const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
// ajax.open('GET', NEWS_URL, false);
// ajax.send();

// const newsFeed = JSON.parse(ajax.response);

// const ul = document.createElement('ul');

// for (let i = 0; i < 10; i++) {
//   const a = document.createElement('a');
//   const li = document.createElement('li');
//   a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
//   a.href = '#';
//   li.appendChild(a);
//   ul.appendChild(li);
  
// }

// document.querySelector('#root').appendChild(ul);

// 필요 데이터
// const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'


const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const container = document.getElementById('root');

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function() {
  const id = location.hash.substr(1)
  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement('h1')
  
  title.innerHTML = newsContent.title;
  content.appendChild(title);
  
});

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.innerHTML = `${newsFeed[i].title}(${newsFeed[i].comments_count})`;
  a.href = `#${newsFeed[i].id}`

  li.appendChild(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);



















// 라우터까지 진행
// const containter = document.getElementById('root');
// const ajax = new XMLHttpRequest();
// const content = document.createElement('div');
// const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'

// function getData(url) {
//   ajax.open('GET', url, false);
//   ajax.send();

//   return JSON.parse(ajax.response);
// }

// function newsFeed() {
//   const newsFeed = getData(NEWS_URL);
//   const newsList = [];

//   newsList.push('<ul>');

//   for (let i = 0; i < 10; i++) {
//     newsList.push(`
//       <li>
//         <a href="#${newsFeed[i].id}">
//           ${newsFeed[i].title} (${newsFeed[i].comments_count})
//         </a>
//       </li>
//     `);

//   }

//   newsList.push('</ul>');
//   containter.innerHTML = newsList.join('');
// }



// function newsDetail() {
//   const id = location.hash.substr(1);
//   const newsContent = getData(CONTENT_URL.replace('@id', id));
  
//   containter.innerHTML = `
//     <h1>${newsContent.title}</h1>
//     <div>
//       <a href='#'>돌아가기</a>
//     </div>    
//   `;
// }

// function router() {
//   const routePath = location.hash;
//   if (routePath === '') {
//     newsFeed();
//   } else {
//     newsDetail();
//   }
// }

// window.addEventListener('hashchange', router);

// router();
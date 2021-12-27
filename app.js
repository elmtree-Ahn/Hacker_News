// 필요 데이터
// const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'


// 페이지네이션
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const container = document.getElementById('root');
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = {
  currentPage: 1
};


function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  let currentPage = 1
  const newsFeed = getData(NEWS_URL)
  const newsList = [];

  newsList.push('<ul>');

  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {  
    newsList.push(`
    <li>
      <a href='#/show/${newsFeed[i].id}'>
        ${newsFeed[i].title}(${newsFeed[i].comments_count})
      </a>
    </li>
    `);
  }
  newsList.push('</ul>')
  newsList.push(`
  <div>
    <a href='#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}'>이전으로</a>
    <a href='#/page/${store.currentPage <= 3 ? store.currentPage + 1 : 3}'>다음으로</a>
  </div>
  `);

  container.innerHTML = newsList.join('');
}

function newsDetail() {
  const id = location.hash.substr(7)
  const newsContent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1')
  
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
    <a href='#/page/${store.currentPage}'>목록으로</a>
  </div>
  
  `;

  title.innerHTML = newsContent.title;

  content.appendChild(title);
  
}

function router() {
  const routerPath = location.hash;
  if (routerPath === '') {
    newsFeed();
  } else if (routerPath.indexOf('#/page/') >= 0){
    store.currentPage = Number(routerPath.substr(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();



// 라우터까지 진행
// const ajax = new XMLHttpRequest();
// const content = document.createElement('div');
// const container = document.getElementById('root');
// const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';


// function getData(url) {
//   ajax.open('GET', url, false);
//   ajax.send();

//   return JSON.parse(ajax.response);
// }

// function newsFeed() {
//   const newsFeed = getData(NEWS_URL)
//   const newsList = [];

//   newsList.push('<ul>');
//   for (let i = 0; i < 10; i++) {  
//     newsList.push(`
//     <li>
//       <a href='#${newsFeed[i].id}'>
//         ${newsFeed[i].title}(${newsFeed[i].comments_count})
//       </a>
//     </li>
//     `)
//   }
//   newsList.push('</ul>')
  
//   container.innerHTML = newsList.join('');
// }

// function newsDetail() {
//   const id = location.hash.substr(1)
//   const newsContent = getData(CONTENT_URL.replace('@id', id));
//   const title = document.createElement('h1')
  
//   container.innerHTML = `
//   <h1>${newsContent.title}</h1>
//   <div>
//     <a href='#'>목록으로</a>
//   </div>
  
//   `;

//   title.innerHTML = newsContent.title;

//   content.appendChild(title);
  
// }

// function router() {
//   const routerPath = location.hash;
//   if (routerPath === '') {
//     newsFeed();
//   } else {
//     newsDetail();
//   }
// }

// window.addEventListener('hashchange', router);

// router();
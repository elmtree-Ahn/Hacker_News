const ajax = new XMLHttpRequest();

// 데이터를 열기
// 메소드, URL, async(동기, 비동기 여부) : false는 동기로 가져온다는 의미
ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);

// 데이터 가져오기
ajax.send();

// 데이터 응답 여부 확인
// console.log(ajax.response);

// 우리가 할 일은 들어온 데이터를 처리해 출력결과를 만들기에요.
// 여기까지 가져오기는 성공했어요. 이제 출력을 해봐야 해요.

// response의 데이터를 객체형식으로 변환하기 (JSON이기에 가능해요!)
const newsFeed = JSON.parse(ajax.response);

// 객체 타입여부 확인하기
// console.log(newsFeed)

// root Id를 가진 div에 문자열 넣기 (하드코딩)
// document.getElementById('root').innerHTML =`<ul>
//   <li>${newsFeed[0].title}</li>
//   <li>${newsFeed[1].title}</li>
//   <li>${newsFeed[2].title}</li>
// </ul>`

// 반복해보기 앗! 이러면 오버라이팅이 되네요.
// for (let i = 0; i < 10; i++) {
// document.getElementById('root').innerHTML =`<ul>
//   <li>${newsFeed[i].title}</li>
// </ul>`
// }


// 오버라이팅 안되게 한 번 해볼까요?
// ul 태그를 하나 만들어요.
const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title
  ul.appendChild(li)
}

// root 아래 ul을 넣었어요.
document.getElementById('root').appendChild(ul)
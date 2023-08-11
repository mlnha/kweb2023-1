// 게시물 데이터
const POSTS = [
    {
      username: "pan._.da",
      likes: 10,
      description: "안녕 나는 판다야!",
      image:
        "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
    },
    {
      username: "rrred_panda",
      likes: 30,
      description: "안녕 나는 레서판다야!",
      image:
        "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
    },
    {
      username: "kitty__",
      likes: 20,
      description: "안녕 나는 고양이야!",
      image:
        "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
    },
    {
      username: "doosan_bear",
      likes: 25,
      description: "안녕 나는 곰이야!",
      image:
        "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
    },
    {
      username: "puppy123",
      likes: 32,
      description: "안녕 나는 강아지야!",
      image:
        "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
    },
    {
      username: "im_bunny",
      likes: 17,
      description: "안녕 나는 토끼야!",
      image:
        "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
    },
  ];

function createPost(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
  
    // username, 프로필 사진
    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
  
    const profilePic = document.createElement("div");
    profilePic.classList.add("profile-pic");
    userInfo.appendChild(profilePic);
  
    const usernameElement = document.createElement("p");
    usernameElement.classList.add("username");
    usernameElement.textContent = post.username;
    userInfo.appendChild(usernameElement);
  
    postContent.appendChild(userInfo);

    // 사진
    const postPic = document.createElement("img");
    postPic.classList.add("post-pic");
    postPic.src = post.image;
    postContent.appendChild(postPic);

    // 좋아요 수, 하트 이미지
    const likesContainer = document.createElement("div");
    likesContainer.classList.add("likes-container");

    const heartImage = document.createElement("img");
    heartImage.classList.add("heart-image");
    heartImage.src = "img/heart.png";

    const likesElement = document.createElement("p");
    likesElement.classList.add("likes");
    likesElement.textContent = post.likes;

    likesContainer.appendChild(heartImage);
    likesContainer.appendChild(likesElement);

    postContent.appendChild(likesContainer);
  
    // description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = post.description;
    postContent.appendChild(descriptionElement); 
  
    postElement.appendChild(postContent);
  
    return postElement;
  }
  
// main 실행 함수
function main() {
    // 게시물 엘리먼트를 넣어야 하는 곳
    const postsContainer = document.getElementById("posts");
  
    for (const post of POSTS){
      const postElement = createPost(post);
      postsContainer.appendChild(postElement);
    }
  }
  main();

  // 네비게이션 바
  const kwebButton = document.getElementById("kweb-button");
  kwebButton.addEventListener("click", toKWEB);
  
  function toKWEB() {
    window.location.href = "http://kwebofficial.com";
  }
  
  const sortButton = document.getElementById("sort-button");
  sortButton.addEventListener("click",sortPostsByLikes);
  
  function sortPostsByLikes() {
    const postsContainer = document.getElementById("posts");
    while (postsContainer.firstChild){
      postsContainer.removeChild(postsContainer.firstChild);
    }
  
    const sortedPosts=POSTS.slice().sort((a,b) => b.likes - a.likes);
    for (const post of sortedPosts) {
      const postElement = createPost(post);
      postsContainer.appendChild(postElement);
    }
  }
  
  // TOP 버튼
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  const scrollToTopButton = document.getElementById("scroll-to-top-button");
  window.addEventListener("scroll", ()=> {
    scrollToTopButton.style.display = "block";
  });
/*
  const logoImage = document.createElement("img");
  logoImage.classList.add("logo-image");
  logoImage.src = "img/logo.png";
*/
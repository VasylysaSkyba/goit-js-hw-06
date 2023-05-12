const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgList = document.querySelector(".gallery");

const makeImgList = ({ url, alt }) =>
  `<li><img src = "${url}" width = "350" alt = "${alt}"></img></li>`;

const imgEl = images.map(makeImgList).join("");

imgList.insertAdjacentHTML("afterbegin", imgEl);

imgList.style.listStyle = "none";
imgList.style.display = "flex";
imgList.style.flexWrap = "wrap";
imgList.style.gap = "25px";
imgList.style.justifyContent = "center";

const isMobile = window.innerWidth <= 768;

const img1 = require(isMobile ? "./Images/mob/1.jpg" : "./Images/1.jpg");
const img2 = require(isMobile ? "./Images/mob/2.jpg" : "./Images/2.jpg");
const img3 = require(isMobile ? "./Images/mob/3.jpg" : "./Images/3.jpg");
const img4 = require(isMobile ? "./Images/mob/4.jpg" : "./Images/4.jpg");

export default [
  {
    img: img1,
    quoteAuthor: 'Szczegóły w dziale "KONCERTY"',
    quote: "Ponad 100 000 przejechanych kilometrów w całej Europie."
  },
  {
    img: img2,
    quoteAuthor: "Portal folk24",
    quote: '"Top of the top zespołów sceny tańca irlandzkiego w Polsce"'
  },
  {
    img: img4,
    quoteAuthor: 'Michał Malitowski, "World of Dance"',
    quote: '"Taka akcja to czysta abstrakcja."'
  },
  {
    img: img3,
    quoteAuthor: 'Krzysztof Ibisz, "Taniec z Gwiazdami"',
    quote: '"Ludzie mocno stąpający po ziemi"'
  }
];

// slides content
const slides = [
  {
    image: `./images/image-tanya.jpg`,
    about: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    name: `Tanya Sinclair`,
    role: `UX Engineer`,
  },
  {
    image: `./images/image-john.jpg`,
    about: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: `John Tarkpor`,
    role: `Junior Front-end Developer`,
  },
];

// index init
let index = 0;

// get HTML elements
let image = document.querySelector('#image');
let about = document.querySelector('#about');
let name = document.querySelector('#name');
let role = document.querySelector('#role');
let controlLeft = document.querySelector('#control-left');
let controlRight = document.querySelector('#control-right');
let picture = document.querySelector('#image');
let blockquote = document.querySelector('blockquote');

// insert in HTML
image.src = slides[index].image;
replaceText(slides[index]);

function slider() {
  index = index % slides.length;
  image.src = slides[index].image;
  replaceText(slides[index]);
  blurText();
}

/**
 * replace a text in HTML
 * @param {number} slideIndex
 */
function replaceText(slideIndex) {
  about.innerHTML = slideIndex.about;
  name.innerHTML = slideIndex.name;
  role.innerHTML = slideIndex.role;
}

/**
 * Move to left image effect
 */
function moveToLeft() {
  picture.animate(
    [
      { transform: 'translateX(-10vh)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 },
    ],
    {
      duration: 700,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'both',
    }
  );
}

/**
 * Move to right image effect
 */
function moveToRight() {
  picture.animate(
    [
      { transform: 'translateX(10vh)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 },
    ],
    {
      duration: 700,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'both',
    }
  );
}

/**
 * Blur text effect
 */
function blurText() {
  blockquote.animate(
    [
      { filter: 'blur(12px)', opacity: 0 },
      { filter: 'blur(0px)', opacity: 1 },
    ],
    {
      duration: 400,
      easing: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
      fill: 'both',
    }
  );
}

/**
 * Show previous slide
 */
function prevSlide() {
  index -= 1;
  if (index < 0) index = slides.length - 1;
  slider();
  moveToRight();
}

/**
 * Show next slide
 */
function nextSlide() {
  index += 1;
  picture.classList.add('move-to-right');
  slider();
  moveToLeft();
}

/**
 * Events listener
 */
controlLeft.addEventListener('click', () => prevSlide());
controlRight.addEventListener('click', () => nextSlide());
document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowLeft') prevSlide();
  if (event.code === 'ArrowRight') nextSlide();
});
document.addEventListener('wheel', (event) => {
  if (event.deltaX < 0) prevSlide();
  if (event.deltaX > 0) nextSlide();
});

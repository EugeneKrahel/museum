const redirect = {
    Discover: "https://www.google.com/maps/@48.861736,2.3369266,3a,90y,104.8h,77.27t/data=!3m6!1e1!3m4!1sAF1QipNAi2fZBeKaV_rCnwFx3PH2eMxVDrj__J7t3E-g!2e10!7i5472!8i2736",
    "Royal Palace": "https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815",
    "Denon Wing": "https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500",
    "Colonnade Perrault": "https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120",
    "Greek hall": "https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736",
    "Mona Lisa": "https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120",
    "Night Palace": "https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652",
};

const cards = [
    {
        title: "Royal Palace",
        img: "assets/img/Royal Palace.png"
    },
    {
        title: "Denon Wing",
        img: "assets/img/Denon Wing.png"
    },
    {
        title: "Colonnade Perrault",
        img: "assets/img/Colonnade Perrault.png"
    },
    {
        title: "Greek hall",
        img: "assets/img/Greek hall.png"
    },
    {
        title: "Mona Lisa",
        img: "assets/img/Mona Lisa.png"
    },
    {
        title: "Night Palace",
        img: "assets/img/Night Palace.png"
    }
];

const container = document.getElementById('cardContainer');

cards.forEach((result) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    const content = `
    <div class="card">
        <div>
            <img src="${result.img}" onclick="redirectURL('${result.title}')"/>
            <h3>${result.title}</h3>
            <span class="s22"> 360° Virtual Tour </span>
            <br />
            <span class="s18"> Google Street Panorama View </span>
        </div>
    </div>
    `;

    container.innerHTML += content;
});

const progress = document.querySelector('.progress');

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})

const progress_volume = document.querySelector('.progress-volume');

progress_volume.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})

function redirectURL(rKey) {
    window.open(redirect[rKey]);
}

// WELCOME CAROUSEL
let items = document.querySelectorAll(".carousel__item");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length; //inf carousel
}

function hideItem() {
    isEnabled = false;
    items[currentItem].classList.remove("active");
    dots[currentItem].classList.remove("active");
}

function showItem() {
    items[currentItem].classList.add("active");
    dots[currentItem].classList.add("active");
    isEnabled = true;

}

function previousItem(n) {
    hideItem();
    changeCurrentItem(n - 1);
    showItem();
}

function nextItem(n) {
    hideItem();
    changeCurrentItem(n + 1);
    showItem();
}

document.querySelector(".welcome_prev").addEventListener("click", function () {
    if (isEnabled) {
        previousItem(currentItem);
        document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
    }
});

document.querySelector(".welcome_next").addEventListener("click", function () {
    if (isEnabled) {
        nextItem(currentItem);
        document.querySelector(".controls__count").innerHTML = `0${currentItem + 1} | 05`;
    }
});

//Смена изображений при клике на кубики
let dots = document.querySelectorAll(".dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        if (isEnabled) {
            if (i === 0) {
                previousItem(i + 1);
            } else if ((i > 0 && i < 4) && (items[i + 1].classList[1] == "active" || items[4].classList[1] == "active")) {
                previousItem(i + 1);
            } else {
                nextItem(i - 1);
            }
            document.querySelector(".controls__count").innerHTML = `0${i + 1} | 05`;
        }
    });
}

//art gallery
const picsArr = [
    {
        src: "assets/img/gallery/galery1.jpg",
        alt: "Psyche Revived by Cupid's Kiss",
        width: 464,
        height: 464,
        title: "Antonio Canova: Psyche Revived by Cupid's Kiss, 1757 – 1822, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery2.jpg",
        alt: "Artemis",
        width: 464,
        height: 580,
        title: "Leochares: Diana of Versailles, C1st - 2nd A.D, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery3.jpg",
        alt: "Dying Slave",
        width: 464,
        height: 580,
        title: "Michelangelo: Dying Slave for the Tomb of Julius II., c. 1513-15, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery4.jpg",
        alt: "Nike of Samothrace",
        width: 464,
        height: 464,
        title: "AWinged Victory of Samothrace, circa 220-185 BC, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery5.jpg",
        alt: "Venus de Milo",
        width: 464,
        height: 580,
        title: "Alexandros of Antioch: Venus de Milo, between 150 and 125 BC, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery6.jpg",
        alt: "The Virgin and Child with Saint Anne",
        width: 464,
        height: 580,
        title: "Leonardo da Vinci: The Virgin and Child with Saint Anne, c. 1503, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery7.jpg",
        alt: "Mona Lisa",
        width: 464,
        height: 580,
        title: "Leonardo da Vinci: Mona Lisa or Giocondo, c. 1503–1506, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery8.jpg",
        alt: "Mollien",
        width: 464,
        height: 580,
        title: "Hector Lefuel: Louvre - grand escalier Mollien"
    },
    {
        src: "assets/img/gallery/galery9.jpg",
        alt: "Venus of Arles",
        width: 464,
        height: 580,
        title: "Venus de Milo, 1st century BC, Paris, Louvre (It may be a copy of the Aphrodite of Thespiae by Praxiteles)"
    },
    {
        src: "assets/img/gallery/galery10.jpg",
        alt: "Louvr Viscontie",
        width: 464,
        height: 464,
        title: "Louvre: Art de l'Islam Cour Visconti - Kanso Déco Ricciotti, Escalier contemporain, Louvre"
    },
    {
        src: "assets/img/gallery/galery11.jpg",
        alt: "Liberty Leading the People",
        width: 464,
        height: 464,
        title: "Eugène Delacroix: Liberty Leading the People, 1830, Paris, Louvre "
    },
    {
        src: "assets/img/gallery/galery12.jpg",
        alt: "Arria et Paetus",
        width: 464,
        height: 348,
        title: "Pierre Lepautre: Arria et Paetus, 1681, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery13.jpg",
        alt: "Ermafrodito borghese",
        width: 464,
        height: 348,
        title: "Materazzo del bernini: Ermafrodito borghese, 2nd century AD, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery14.jpg",
        alt: "La Belle Ferronnière",
        width: 464,
        height: 580,
        title: "Leonardo da Vinci or his Milanese circle: La Belle Ferronnière, 1490–1496, Paris, Louvre"
    },
    {
        src: "assets/img/gallery/galery15.jpg",
        alt: "Louvre Pyramid",
        width: 464,
        height: 464,
        title: "Ieoh Ming Pei: Louvre Pyramid, 1988, Paris, Louvre"
    },
];
const pics = document.getElementById("pics");
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(picsArr);

for (let i = 1; i < picsArr.length; i++) {
    pics.innerHTML += `<img src=${picsArr[i].src} alt="${picsArr[i].alt}" width="${picsArr[i].width}" height="${picsArr[i].height}" title="${picsArr[i].title}">`;
}

const picsCollect = pics.getElementsByTagName("img");
for (let i = 0; i < picsCollect.length; i++) {
    if (+picsCollect[i].getAttribute("width") === +picsCollect[i].getAttribute("height")) {
        picsCollect[i].classList.add("square", "img-show");
    } else if (+picsCollect[i].getAttribute("width") < +picsCollect[i].getAttribute("height")) {
        picsCollect[i].classList.add("vertical", "img-show");
    } else if (+picsCollect[i].getAttribute("width") > +picsCollect[i].getAttribute("height")) {
        picsCollect[i].classList.add("horizontal", "img-show");
    }
}

// Tickets form
const buyTicketsBtn = document.getElementById("buyTicketsBtn");
const formCloseBtn = document.getElementById("formCloseBtn");
const form = document.querySelector(".tickets__modal");
const overlay = document.querySelector(".tickets__overlay");
buyTicketsBtn.addEventListener("click", showTicketsForm);
formCloseBtn.addEventListener("click", hideTicketsForm);
overlay.addEventListener("click", hideTicketsForm);

function showTicketsForm() {
  form.classList.remove("closed");
  overlay.classList.remove("transparent");
}

function hideTicketsForm() {
  form.classList.toggle("closed");
  overlay.classList.toggle("transparent");
}


//NAV burger
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links_list");
    const navLinks = document.querySelectorAll(".nav-links_list__item");
  
    // Toggle Nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      // Animate Links
      navLinks.forEach((link) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade forwards`;
        }
      });
      // Burger Animation
      burger.classList.toggle("toggle");
    });
  };
  
  const app = () => {
    navSlide();
  };
  
  app();
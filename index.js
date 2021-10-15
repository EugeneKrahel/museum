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

const container = document.getElementById("cardContainer");

cards.forEach((result) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    const content = `
    <div class="card" onclick="redirectURL('${result.title}')">
        <div>
            <img src="${result.img}"/>
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

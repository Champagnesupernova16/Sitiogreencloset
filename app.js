var swiper = new Swiper(".swiper-mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect:{
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop:true,

});

const btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener("click", e => {
    btnSwitch.classList.toggle("active");
    document.body.classList.toggle("active");

})

const $counters = document
    .querySelectorAll('.counter');

$counters.forEach(($counter) => {
    $counter.innerText = '0';
    const updateCounter = () => {
        const target = Number(
            $counter.getAttribute('data-target'),
        );
        const count = Number($counter.innerText);
        const increment = target / 200;
        if(count < target) {
            $counter.innerText =
                `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            $counter.innerText = target;
        }
    };

    updateCounter();
});
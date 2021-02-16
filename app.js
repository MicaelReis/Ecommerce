//Movement Animation
const card = document.querySelector('.card');
const container = document.querySelector('.container2');
//items
const titulo = document.querySelector('.titulo')
const perfume = document.querySelector('.perfume img')
const compra = document.querySelector('.compra button')
const quant = document.querySelector('.quant')
const description = document.querySelector('.info h3')

//Moving Animation event
container.addEventListener('mousemove', (e) => {
   let xAxis = (window.innerWidth / 8 - e.pageX) /1050;
   let yAxis = (window.innerHeight / 8 - e.pageY) /150;
   
   card.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
   card.style.transition = 'all 0.2s ease'
});
//Animate In
container.addEventListener('mouseenter', e =>{
    card.style.transition = 'none';
   
    //Popout

    titulo.style.transform = "translateZ(150px)";
    perfume.style.transform = "translateZ(200px) rotateZ(-25deg)";
    description.style.transform = "translateZ(125px)";
    quant.style.transform = "translateZ(100px)";
    compra.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener('mouseleave', e =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback

    titulo.style.transform = "translateZ(0px)";
    perfume.style.transform = "translateZ(0px) rotateZ(0deg)"
    description.style.transform = "translateZ(0px)";
    quant.style.transform = "translateZ(0px)";
    compra.style.transform = "translateZ(0px)";
})
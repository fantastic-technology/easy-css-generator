const code = document.querySelector(".code")
const click1 = document.querySelector(".l1");
const list1 = document.querySelector(".list1");
click1.addEventListener('click', function() {
    list1.classList.toggle('accordion');

});
const click2 = document.querySelector(".l2");
const list2 = document.querySelector(".list2");
click2.addEventListener('click', function() {
    list2.classList.toggle('accordion');

});





const enable = document.querySelector(".btn1")
enable.addEventListener('click', function() {
    const emptyrgb = document.querySelector(".emptyrgb")
    const code = document.querySelector(".code")
    const cinp = document.querySelector(".color1").value;
    emptyrgb.textContent = cinp
    const disabled = enable.textContent = "disabled parameter"
    if(code.classList.toggle('params')){
        enable.textContent = "Enabled parameter"
      demo.style.backgroundColor = cinp
       return blankcode.innerHTML = ""
       
    }
    if(enable.textContent = disabled){
        blankcode.innerHTML = ""
        demo.style.backgroundColor = ""
    }
});


const change_color = document.querySelector(".color1");
const emptyrgb = document.querySelector(".emptyrgb");
const demo = document.querySelector(".demo");
const blankcode = document.querySelector(".blank");
change_color.addEventListener('input', function() {
    const cinp = change_color.value;
    const code = document.querySelector(".code")
    emptyrgb.textContent = `RGB Value: ${cinp}`;
    demo.style.backgroundColor = cinp
    blankcode.innerHTML = `${cinp}};`
});
let deg = 0;
const degInput = document.querySelector(".range1");
function move() {
    const count2 = document.querySelector(".count2");
    const rangeInput = document.querySelector(".range1");
    const count = document.querySelector(".count");
    deg = rangeInput.value;
    count.textContent = deg;
    count2.textContent = deg;
}
function enable2(){
   demo.classList.add('classgradient')
}

const color1Input = document.querySelector(".color2");
const color2Input = document.querySelector(".color3");

function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const cl2 = document.querySelector(".cg2")
    cl2.textContent = color1
    
    const cl3 = document.querySelector(".cg3")
    cl3.textContent = color2
    demo.style.background =`linear-gradient(${deg}deg, ${color1}, ${color2})`;
}

color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);
degInput.addEventListener("input", updateGradient);
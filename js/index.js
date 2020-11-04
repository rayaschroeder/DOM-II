// Event 1: Click Event --> Rotate Img
let busImg = document.querySelector('.intro img');
busImg.addEventListener('click', (event) => {
    event.target.style.transform = "rotate(-1deg)";
})


//Event 2: Copy Event --> Change Heading Color
let header = document.querySelector('.intro h2');
header.addEventListener('copy', (event) => {
    event.target.style.color = "hotpink";
})


//Event 3: Paste Event --> Revert Heading Color
header.addEventListener('paste', (event) => {
    event.target.style.color = 'black';
})


// Event 4: Mouseover Event --> Change Background Color
let div = document.querySelectorAll('.text-content')[0];
div.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "green";
})


//Stop Event 4 Propagation to H2
let letsGo = document.querySelectorAll('.text-content h2')[0];
letsGo.addEventListener('mouseover', (event) => {
    event.stopImmediatePropagation();
})


//Event 5: Mouseleave Event --> Revert Text Background Color
div.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = "white";
})


//Event 5: Mousemove Event --> Hide Img
let mapImg = document.querySelector('.img-content img')
mapImg.addEventListener('mousemove', (event) => {
    event.target.style.visibility = "hidden";
})


//Event 6: Keydown Event --> Change Site Background Color
window.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = "lightblue";
})


//Event 7: Keyup Event --> Revert Site Background Color
window.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = "white";
})


//Event 8: Resize Event --> Change Font Family
window.addEventListener('resize', (event) => {
    document.querySelector('.content-destination h2').style.fontFamily = "Sans-Serif";
})


//Event 9: Mouseenter Event --> Add Dotted Border to Headings
let headings = document.querySelectorAll('.destination h4');
headings.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.border = "5px dotted hotpink";
    });
})

//Event 10: Double Click Event --> Revert Dotted Border of Headings
headings.forEach((element) => {
    element.addEventListener('dblclick', (event) => {
        event.target.style.border = "none";
    });
})


//Prevent Nav Items From Default Refresh
let nav = document.querySelectorAll('.nav');
nav.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

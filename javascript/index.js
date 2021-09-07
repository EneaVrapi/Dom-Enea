console.log('prove')
// marrim element me ane te id
let kuti= document.getElementById('kuti')
// 
// kuti.style.backgroundColor='lightgray'
// shtojme atribut per elementin div .setAttribute
kuti.setAttribute('class'/*atributi qe do shtojme*/, /*emri i atributit*/'trupi')
kuti.style.margin='50px'
console.log(kuti.innerHTML)
kuti.classList.add('klasEre')
kuti.classList.add('klassTjeter')
console.log(kuti.classList)
kuti.classList.remove('klassTjeter')
console.log(kuti.classList)

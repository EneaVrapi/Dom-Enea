/* Si te lidhim elementet e html me javascript
Me ane te metodave te ndryshme 
javascript mund te bej kapjen e elementeve te HTML per ti ndryshuar apo 
perdorur ato sipas nevojes. 
me ane te fjales kyce 'document'(e cila permbane te gjithe informacionin
    e html,css dhe javascript) ne bejme kapjen e elementve te DOM.*/
// Menyra per te kapur element jane disa 
// Ne secilir rast neve do te na duhet te krijojme nje variabel
// ku do te regjistrojme kete element qe do kapim psh:

// kapim element me ane te id (id eshte ne etiketen/tag e elementit 
//ne shembullin me poshte <div id='kuti'>)
// metoda eshte let variabel = document.getElementById('id e elementit')
let kuti = document.getElementById('kuti')

//  po te bejme console.log(kuti) do na japi gjithe kutin si element
console.log(kuti, 'kutia')

// Po duam te shikojme thjeshte cfare permban brenda ky element div me id kuti,
// duhet te bejme:
console.log(kuti.innerHTML)


/* Menyre tjeter per te kapur element dhe ti ndryshosh ne Javascript eshte
me ane te klases se elementit. Por ne kete rast shume element mund te ken 
te njejten klas. Nese ne duam te kapim nje element specifik duke perdorur klasen
duhet te specifikojme edhe indeksin ose me and te if else te percaktojme 
se cilen nga elementet duam te kapim. 
*/
// Shembull i kapjes se te gjith elementeve me te njejten klas
let klasat = document.getElementsByClassName('test')
console.log('te gjithe elementet me kete klas:', klasat)
// Shembull me index
let klas = document.getElementsByClassName('test')
console.log("vetem elementi pare[0] me klasen test", klas[0])

// mund ta regjistrojme ne nje variabel te vecant klasen e dyte
let klasa2 = document.getElementsByClassName('test')[1]
console.log('klasa e dyte \n', klasa2)

/*
Menyre tjeter qe te kapim elementet eshte me ane te tag ose etiketes.
*/
let span = document.getElementsByTagName('span')
// KUJDES!!!! edhe kapja e elementeve me ane te etiketes eshte njesoj si 
// kapja e elementve me ane te klases jep nje array elementesh 
// dhe duhet te percaktojme ca indexi duhet apo cilin nga elemented duam 
console.log(span[0].innerHTML)
// qe te mund te modifikojme nje nga keta elment duhet
//  duhet te bejm loop nese jane shume dhe 
// sja dim indexin asaj qe duam 
for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = 'red'
}
// ose thjesht japim indexin qe duam
span[0].style.backgroundColor = 'blue'
// shtojme atribut per elementin div .setAttribute
// kuti.setAttribute('class'/*atributi qe do shtojme*/, /*emri i atributit*/'trupi')
// kuti.style.margin = '50px'
// console.log(kuti.innerHTML)
// kuti.classList.add('klasEre')
// kuti.classList.add('klassTjeter')
// console.log(kuti.classList)
// kuti.classList.remove('klassTjeter')
// console.log(kuti.classList)
// let div = document.querySelector('h1')
// div.style.background = 'blue'

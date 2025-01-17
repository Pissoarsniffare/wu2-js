export function setupPractice(element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  const age = 18
  const name = 'Samuel'
  const betyg = 'F'
  const info = `Jag heter ${name} och är ${age} år gammal och har ${betyg} i engelska, ${betyg} i svenska, ${betyg} i webbutveckling, ${betyg} i webbserverprogrammering, ${betyg} i programmering och ${betyg} i samhällskunskap 😀,`
  console.log(info)
  const varsAndTypes = 'varsAndTypes'
  console.log(varsAndTypes, typeof (varsAndTypes))
}

function operators(element) {
  let a = 32
  let b = 37
  let sum = a + b
  console.log('Summan av', a, 'och', b, 'är', sum)
  console.log('operators === ', 1 === 1)
}

function controlStructures(element) {
  let age = 18
  if (age >= 18) {
    console.log('Du är myndig')
  }
  else {
    console.log('Du är inte myndig')
  }
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects(element) {
  let personer = ['Samuel', 'Emil', 'Jens']

  let betyg = {
    Samuel: 'A',
    Emil: 'C',
    Jens: 'F'
  }

  for (let i = 0; i < personer.length; i++) {
    let person = personer[i];
    let personensBetyg = betyg[person];
    console.log(person + " har betyget " + personensBetyg);
  }
  console.log(['arrays', { and: 'objects' }])
}

function domAndEvents(element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation(element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}
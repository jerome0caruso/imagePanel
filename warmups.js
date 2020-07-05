const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


const inven15 = inventors.filter(person => person.year >= 1500 && person.year < 1600 );
    console.table(inven15);

const invenNames = inventors.map(person => `${person.first} ${person.last}` );
    console.log(invenNames);

const oldToYoung = inventors.sort((youngest ,oldest) => (oldest.year - youngest.year));
console.log(oldToYoung)

const totalYears = inventors.reduce((acc, person) =>{ 
    acc += person.passed - person.year
        return acc;
}, 0)
console.log(totalYears)

const livedTheLongest = inventors.sort((a, b) => { return (a.passed - a.year) - (b.passed - b.year)});
console.table(livedTheLongest)

/*const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));

const linksArray = links
.map(streets => streets.textContent)
.filter(streetName => streetName.includes("de"));
*/

const lastName = people.sort((a,b) =>{return a - b})
console.log(lastName)

const name = people.sort((lastOne, nextOne)=>{
    const [alast, afirst] = lastOne.split(", ");
    const [blast, bfirst] = nextOne.split(", ");
    return afirst > bfirst? 1: -1;
    
})
console.log(name)


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
 'walk', 'car', 'van', 'car', 'truck' ];

 const howMany = data.reduce((times, car) => {
     if(car === "car" || car === "truck" || car === "bike" || car === "walk" || car === "van"){
         times++
         return times
     } 
     return times
 }, 0)

 console.log(howMany)

 const transportation = data.reduce((obj, type) =>{
    if(!obj[type]){
        obj[type] = 0;
    }
    obj[type]++;
    return obj;
 }, {})

 console.log(transportation)
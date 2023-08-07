const cardArray = [      // we are making an array of objects
    {
        name: 'fries',
        img: 'fries.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'cheeseburger.jpg',
    },
    {
        name: 'hotdog',
        img: 'hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.jpg',
    },
    {
        name: 'milkshake',
        img: 'milkshake.jpg',
    },
    {
        name: 'pizza',
        img: 'pizza.jpg',
    },
    {
        name: 'fries',
        img: 'fries.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'cheeseburger.jpg',
    },
    {
        name: 'hotdog',
        img: 'hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.jpg',
    },
    {
        name: 'milkshake',
        img: 'milkshake.jpg',
    },
    {
        name: 'pizza',
        img: 'pizza.jpg',
    }
]

 //Math.random returns a number between 0 to 1 . 0.5-math.random returns number 
//from 0.5 & -0.4
/*Start with the array [3,9,1]

If the random function returns a negative number, the 3 and the 9 stay in the same order ie; you have [3,9,1]

BUT if the random function returns a positive number, then they go in the opposite order (b comes first) ie; you now have [9,3,1]

Then repeat the process for the next pair of elements, which will either be 9,1 or 3,1 depending on the result of the first sort. 
If the next random number is negative, swap them. If it’s positive, don’t swap them.*/
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay= document.querySelector('#grid') // this method will look for an id that is grid
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds =[]
const cardsWon =[]
function createBoard () {
    for(let i = 0; i< cardArray.length;i++){
        const card = document.createElement('img') //The createElement() method creates an element node.
        card.setAttribute('src', 'bg.jpg') //The setAttribute() method sets a new value to an attribute. 
        //eg- myAnchor.setAttribute("href", "https://www.w3schools.com");
        card.setAttribute('height','100px')
       card.setAttribute('width','100px')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card) //The appendChild() method appends a node (element) as the last child of an element.
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId  = cardsChosenIds[1]

   console.log('check for match')
   if(optionOneId==optionTwoId){
    cards[optionOneId].setAttribute('src','bg.jpg')
      cards[optionTwoId].setAttribute('src','bg.jpg')
    alert('You have clicked the same image')
   }

   else if(cardsChosen[0]==cardsChosen[1]){
      //alert("You found a match!")
      cards[optionOneId].setAttribute('src','white.png')
      cards[optionTwoId].setAttribute('src','white.png')
      cards[optionOneId].removeEventListener('click',flipCard)
      cards[optionTwoId].removeEventListener('click',flipCard)

      cardsWon.push(cardsChosen)

   }
   else{
    cards[optionOneId].setAttribute('src','bg.jpg')
    cards[optionTwoId].setAttribute('src','bg.jpg')
    
   }
   resultDisplay.textContent = cardsWon.length //textContent property set/returntext content of specified node and its descendants
   cardsChosen= []
   cardsChosenIds = []

   if(cardsWon.length == cardArray.length/2){
      resultDisplay.textContent = "Congratulations! You got 'em all"
   }
}

function flipCard(){
    //console.log(cardArray)
    const cardId= this.getAttribute('data-id')   //this keyword basically brings whatever element we click on
    cardsChosen.push(cardArray[cardId].name)    
    cardsChosenIds.push(cardId)  
    console.log(cardsChosen) 
    console.log(cardsChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
   if (cardsChosen.length == 2){
    setTimeout(checkMatch, 500)             //The setTimeout() method calls a function after a number of milliseconds.
   }
}
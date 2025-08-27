// card object
const helplineCards = [
  {
    logo: "./assets/police.png",
    title: "Police Helpline Number",
    category: "Police",
    number: "999",
    tag: "Police"
  },
  {
    logo: "./assets/fire.png",
    title: "Fire Service Helpline",
    category: "Fire Service",
    number: "995",
    tag: "Fire"
  },
  {
    logo: "./assets/ambulance.png",
    title: "Ambulance Service",
    category: "Health",
    number: "109",
    tag: "Ambulance"
  },
  {
    logo: "./assets/women.png",
    title: "Women Helpline",
    category: "Social Service",
    number: "121",
    tag: "Women"
  },
  {
    logo: "./assets/child.png",
    title: "Child Helpline",
    category: "Social Welfare",
    number: "1098",
    tag: "Child"
  },
  {
    logo: "./assets/cyber.png",
    title: "Cyber Crime Helpline",
    category: "Cyber Security",
    number: "106",
    tag: "Cyber"
  }
];



// show card on the ui
const cardContainer =  document.getElementById('card-container');
helplineCards.forEach(function(card){
    let div = document.createElement('div')
    div.innerHTML = `
    <div class="card bg-white p-8 shadow-md h-[360px]">
                        <div class="flex justify-between items-center">
                            <img class="w-[60px] bg-sky-200 rounded-2xl p-2" src="./assets/police.png" alt="logo-image">
                            <span id="heart1"> <i class="card-heart fa-regular fa-heart text-3xl cursor-pointer"></i> </span>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold mt-4">${card.title}</h2>
                            <p class="text-[gray]">Police</p>
                            <h3 class="text-4xl font-semibold mt-3">999</h3>
                            <p class="bg-gray-200 text-[gray] p-2 rounded-3xl inline-block mb-4">Police</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn bg-[white] w-1/2"> <i class="fa-regular fa-copy"></i> Copy</button>
                            <button class="call-btn btn btn-success w-1/2">Call</button>
                        </div>
                    </div>
    
    `
    cardContainer.appendChild(div)
})



// heart button functionality ==========
// get the nav-heart
const navHearts =  document.querySelectorAll('.increase-count');

// select all the heart button
const allHeart = document.getElementsByClassName('card-heart');
// count
let count = 0;
for(let heart of allHeart){
    heart.addEventListener('click', function(){
        count++;
        navHearts.forEach(function(heart){
            heart.innerText = count;
        })
    })
}



// call button functionality ==========
// get the call buttons
const callBtns = document.querySelectorAll('.call-btn');
// get the coins 
const allCoin = document.querySelectorAll('.coin-btn');



for(let callBtn of callBtns){
    callBtn.addEventListener('click', function(){
        helplineCards.forEach(function(card, index){
            card = helplineCards[index];
            alert(`${card.title} and ${card.number}`)
        })
    })
}

for(let coin of allCoin){
    coin = parseInt(coin.innerText);
    console.log(coin);
    
}

// count-decrease



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
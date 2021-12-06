let work = document.querySelector(".statistics__h1--work")
let work2 = document.querySelector(".statistics__last-week--work")

let play = document.querySelector(".statistics__h1--play")
let play2 = document.querySelector(".statistics__last-week--play")

let study = document.querySelector(".statistics__h1--study")
let study2 = document.querySelector(".statistics__last-week--study")

let exercise = document.querySelector(".statistics__h1--exercise")
let exercise2 = document.querySelector(".statistics__last-week--exercise")

let social = document.querySelector(".statistics__h1--social")
let social2 = document.querySelector(".statistics__last-week--social")

let selfCare = document.querySelector(".statistics__h1--self-care")
let selfCare2 = document.querySelector(".statistics__last-week--self-care")

const showData = function(data){
    fetch("data.json")
    .then((response)=>{
        return response.json();
    })
    .then(response=>{
        if(data=="d"){
            work.textContent = response[0].timeframes.daily.current + "hrs";
            work2.textContent = "Last Day - " + response[0].timeframes.daily.previous + "hrs";

            play.textContent = response[1].timeframes.daily.current + "hrs";
            play2.textContent = "Last Day - " + response[1].timeframes.daily.previous + "hrs";
            
            study.textContent = response[2].timeframes.daily.current + "hrs";
            study2.textContent = "Last Day - " + response[2].timeframes.daily.previous + "hrs";
            
            exercise.textContent = response[3].timeframes.daily.current + "hrs";
            exercise2.textContent = "Last Day - " + response[3].timeframes.daily.previous + "hrs";
            
            social.textContent = response[4].timeframes.daily.current + "hrs";
            social2.textContent = "Last Day - " + response[4].timeframes.daily.previous + "hrs";
            
            selfCare.textContent = response[5].timeframes.daily.current + "hrs";
            selfCare2.textContent = "Last Day - " +response[5].timeframes.daily.previous + "hrs";
        }
        else if(data=="w"){
            work.textContent = response[0].timeframes.weekly.current + "hrs";
            work2.textContent = "Last Week - " + response[0].timeframes.weekly.previous + "hrs";

            play.textContent = response[1].timeframes.weekly.current + "hrs";
            play2.textContent = "Last Week - " + response[1].timeframes.weekly.previous + "hrs";
            
            study.textContent = response[2].timeframes.weekly.current + "hrs";
            study2.textContent = "Last Week - " + response[2].timeframes.weekly.previous + "hrs";
            
            exercise.textContent = response[3].timeframes.weekly.current + "hrs";
            exercise2.textContent = "Last Week - " + response[3].timeframes.weekly.previous + "hrs";
            
            social.textContent = response[4].timeframes.weekly.current + "hrs";
            social2.textContent = "Last Week - " + response[4].timeframes.weekly.previous + "hrs";
            
            selfCare.textContent = response[5].timeframes.weekly.current + "hrs";
            selfCare2.textContent = "Last Week - " +response[5].timeframes.weekly.previous + "hrs";
        }
        else{
            work.textContent = response[0].timeframes.monthly.current + "hrs";
            work2.textContent = "Last Month - " + response[0].timeframes.monthly.previous + "hrs";

            play.textContent = response[1].timeframes.monthly.current + "hrs";
            play2.textContent = "Last Month - " + response[1].timeframes.monthly.previous + "hrs";
            
            study.textContent = response[2].timeframes.monthly.current + "hrs";
            study2.textContent = "Last Month - " + response[2].timeframes.monthly.previous + "hrs";
            
            exercise.textContent = response[3].timeframes.monthly.current + "hrs";
            exercise2.textContent = "Last Month - " + response[3].timeframes.monthly.previous + "hrs";
            
            social.textContent = response[4].timeframes.monthly.current + "hrs";
            social2.textContent = "Last Month - " + response[4].timeframes.monthly.previous + "hrs";
            
            selfCare.textContent = response[5].timeframes.monthly.current + "hrs";
            selfCare2.textContent = "Last Month - " +response[5].timeframes.monthly.previous + "hrs";
        }
    })
}

document.querySelectorAll('.main__p--set-time').forEach(li=>{
    li.addEventListener("click",()=>{
        document.querySelectorAll('.main__p--set-time').forEach(list=>{
            list.classList.remove('active')
        })
        li.classList.add('active');
        let data = li.getAttribute('data-menu')
        showData(data);
    })
})

showData("w");
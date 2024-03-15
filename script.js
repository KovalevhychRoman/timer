let giveaway = document.querySelector('.giveaway')
let day = document.querySelector('#day')
let hour = document.querySelector('#hour')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday ']

/// variables
let endGiveawayDate = new Date(2024, 2, 25, 9)
let endDate = endGiveawayDate.getDate()
let endHour = endGiveawayDate.getHours()
let endMin = endGiveawayDate.getMinutes()
let endYear = endGiveawayDate.getFullYear()
let endMonth = endGiveawayDate.getMonth()
let endDay = days[endGiveawayDate.getDay()]
let endTimeInMilis = endGiveawayDate.getTime()
console.log(endTimeInMilis)
// code
if (endMonth === 0) {
    endMonth = 'january'
} else if(endMonth === 1) {
    endMonth = 'february'
} else if(endMonth === 2) {
    endMonth = 'march'
} else if(endMonth === 3) {
    endMonth = 'april'
}else if(endMonth === 4) {
    endMonth = 'may'
}else if(endMonth === 5) {
    endMonth = 'june'
}else if(endMonth === 6) {
    endMonth = 'july'
}else if(endMonth === 7) {
    endMonth = 'august'
}else if(endMonth === 8) {
    endMonth = 'september'
}else if(endMonth === 9) {
    endMonth = 'october'
}else if(endMonth === 10) {
    endMonth = 'november'
}else if(endMonth === 11) {
    endMonth = 'december'
}
giveaway.textContent = `Giveaway ends on ${endDay}, ${endDate} ${endMonth} ${endYear} ${endHour < 10 ? '0' + endHour : endHour}:${endMin < 10 ? '0' + endMin : endMin}`
let getRemainingTime  = () => {
    let now = new Date()
    let nowInMilis = now.getTime()
    let dif = endTimeInMilis - nowInMilis
  
    let oneDay = 24 * 60 * 60 * 1000
    let oneHour = 60 * 60 * 1000
    let oneMinute = 60 * 1000
    
    
    let difDays = Math.floor(dif / oneDay) 
    let difHours = Math.floor((dif % oneDay) / oneHour)
    let difMinutes = Math.floor((dif % oneHour) / oneMinute)
    let difSeconds = Math.floor((dif % oneMinute) / 1000)
    day.textContent = difDays
    hour.textContent = difHours
    min.textContent = difMinutes
    sec.textContent = difSeconds
}
setInterval(getRemainingTime, 1000)

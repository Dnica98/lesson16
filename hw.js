

const countBE = 2250;


const hour = 60;
const day = 1440;
const week = 10080;


if (countBE / week >= 1){
    const remainingWeeks = countBE / week
    const remainingDaysInMinutes = countBE % week
    const weekMessage = Math.floor(remainingWeeks)=== 1 ? 'week' : 'weeks';
    const daysMessage = Math.floor(remainingDaysInMinutes / day) > 1 ? 'days' : 'day'

    console.log(`${Math.floor(remainingWeeks)} ${weekMessage} ${Math.floor(remainingDaysInMinutes / day)}${daysMessage}`)
    

} else if (countBE / day >= 1) {
    const remainingDays = countBE / day
    const remainingHoursInMinutes = countBE % day
    

    console.log(`${Math.floor(remainingDays)}day ${Math.floor(remainingHoursInMinutes / hour)}h`)

} else if (countBE / hour >= 1) {
    const remainingHours = countBE / hour
    const remainingMinutes = countBE % hour

    console.log(`${Math.floor(remainingHours)}h ${Math.floor(remainingMinutes )}m`)

} else {

    console.log('less than an hour')
}

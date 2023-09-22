// references to the element
let slackUserName = document.querySelector('[data-testid="slackUserName"]');
let currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
let myTrack = document.querySelector('[data-testid="myTrack"]');
let githubURL = document.querySelector('[data-testid="githubURL"]');

// current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const  currentDay = new Date();
    const dayOfWeek = daysOfWeek[currentDay.getUTCDay()];
    currentDayOfTheWeek.textContent = dayOfWeek

}
// function to update the current UTC time in milliseconds
function updateUTCTime(){
    const currentDate = new Date();
    const utcTimeMil =currentDate.getTime ();
    currentUTCTime.textContent =utcTimeMil
}
updateDayOfWeek();
updateUTCTime();

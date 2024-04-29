// Hope Squires
// April 29, 2024
// JavaScript Fortune Teller


const jobs = ['Designer', 'Yoga Instructor', 'Teacher', 'Painter', 'Doctor', 'Bartender', 'Cashier', 'Bank Teller'];

const countries = ['Japan', 'the United Kingdom', 'Ireland', 'Denmark', 'Austria', 'Botswanna'];

const randCountry = countries[Math.floor(Math.random() * countries.length)];

const randJob = jobs[Math.floor(Math.random() * jobs.length)];

const firstName = prompt('What is your first name? (ex. Jeff)\n');

const fortune = "In 7 years, " + firstName + " will be working as a(n) " + randJob + " in " + randCountry + ".";

document.querySelector('#myFortune').innerHTML = fortune;
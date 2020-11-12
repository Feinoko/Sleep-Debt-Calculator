let launchBox = document.querySelector('p');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let mon, tue, wed, thu, fri, sat, sun;

// referencing into this constant the reasonable amount of weekly sleep hours for a human
const OKhours = 8*7; // 8 hrs per weekday
let sleptHours = 0; // will addup daily sleep hours in a loop

const print = (a) => console.log(a); // shorthand to console.log
print('hello world');

launchBox.addEventListener('click', insertFunction);

// launching the project exercise
function insertFunction() {

   mon = Number(prompt('How many hours did you sleep on Monday'));
   tue = Number(prompt('How many hours did you sleep on Tuesday'));
   wed = Number(prompt('How many hours did you sleep on Wednesday'));
   thu = Number(prompt('How many hours did you sleep on Thursday'));
   fri = Number(prompt('How many hours did you sleep on Friday'));
   sat = Number(prompt('How many hours did you sleep on Saturday'));
   sun = Number(prompt('How many hours did you sleep on Sunday'));

   let hoursPerNight = [mon, tue, wed, thu, fri, sat, sun];

   // returns how many hours slept for a single day
   function getSleepHours(day) {
      switch(day) {
         case 'Monday' : mon;
         break;
         case 'Tuesday' : tue;
         break;
         case 'Wednesday' : wed;
         break;
         case 'Thursday' : thu;
         break;
         case 'Friday' : fri;
         break;
         case 'Saturday' : sat;
         break;
         case 'Sunday' : sun;
         break;
      }
   }

   //debug:testing that the above switch works
    for (let i = 0 ; i < weekDays.length ; i++) {
      print(hoursPerNight[i]);
      sleptHours += hoursPerNight[i];
    }

    const sleepDebt = OKhours - sleptHours;

    alert(sleptHours >= OKhours ? `You are well rested! You are ${-sleepDebt} hours above weekly requirement!` : `you are ${sleepDebt} hours behind! Get some sleep!`);
    alert('A human being must sleep 8 hrs a day to have optimial psychic & physical capabilities');
/*     if (sleptHours >= OKhours)
 */
}



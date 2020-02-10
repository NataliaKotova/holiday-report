

let activities = [];
let hours = [];
  
$('#person2').hide();
  $('#save').click(function(){
    getActivities();
    getHours();
    for(let i = 0; i < activities.length; i++) {
      if(activities[i] == ''){
         alert('Input can not be left blank');
      }
      else{
        return activities;
      }
    }
    
    for (let i = 0; i < activities.length; i++){
      if(hours[i] == ''){
        alert('Input can not be left blank');
     }
     else{
       return hours;
     }
    }
  });


function getActivities(){
  let activity1 = document.getElementById('activity1').value;
  let activity2 = document.getElementById('activity2').value;
  let activity3 = document.getElementById('activity3').value;
  let activity4 = document.getElementById('activity4').value;
  let activity5 = document.getElementById('activity5').value;
  activities.push(activity1);
  activities.push(activity2);
  activities.push(activity3);
  activities.push(activity4);
  activities.push(activity5);
  console.log(activities);
}

function getHours(){
  let hours1 = document.getElementById('hours1').value;
  let hours2 = document.getElementById('hours2').value;
  let hours3 = document.getElementById('hours3').value;
  let hours4 = document.getElementById('hours4').value;
  let hours5 = document.getElementById('hours5').value;
  hours.push(hours1);
  hours.push(hours2);
  hours.push(hours3);
  hours.push(hours4);
  hours.push(hours5);
  console.log(hours);
}

// function showResults(){
//   for 
// }

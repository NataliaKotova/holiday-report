let person1Activities = [];
let person1Hours = [];
let person2Activities = [];
let person2Hours = [];
let person1HoursTotal = 0;
let person2HoursTotal = 0;

function getHours(){
  let person1Hours1 = document.getElementById('p1Hours1').value;
  let person1Hours2 = document.getElementById('p1Hours2').value;
  let person1Hours3 = document.getElementById('p1Hours3').value;
  let person1Hours4 = document.getElementById('p1Hours4').value;
  let person1Hours5 = document.getElementById('p1Hours5').value;
  person1Hours.push(person1Hours1);
  person1Hours.push(person1Hours2);
  person1Hours.push(person1Hours3);
  person1Hours.push(person1Hours4);
  person1Hours.push(person1Hours5);
  let person2Hours1 = document.getElementById('p2Hours1').value;
  let person2Hours2 = document.getElementById('p2Hours2').value;
  let person2Hours3 = document.getElementById('p2Hours3').value;
  let person2Hours4 = document.getElementById('p2Hours4').value;
  let person2Hours5 = document.getElementById('p2Hours5').value;
  person2Hours.push(person2Hours1);
  person2Hours.push(person2Hours2);
  person2Hours.push(person2Hours3);
  person2Hours.push(person2Hours4);
  person2Hours.push(person2Hours5);
  console.log(person1Hours);
}

function checkFields(array){
  for (let i = 0; i < array.length; i++){
    if(array[i] == ''){
      alert('Input can not be left blank');
   }
   else{
     return true;
   }
  }
}

function person1HoursCalculate(){
  let person1HoursIntegers = [];
  // let person1HoursTotal = 0;
  for (let i = 0; i <person1Hours.length; i++) {
    person1HoursIntegers.push(parseInt(person1Hours[i]));
    console.log(person1HoursIntegers);
  }
  person1HoursTotal = person1HoursIntegers.reduce(addToTotal);
  return person1HoursTotal;
  
}

function person2HoursCalculate(){
  let person2HoursIntegers = [];
 
  for (let i = 0; i <person2Hours.length; i++) {
    person2HoursIntegers.push(parseInt(person2Hours[i]));
    console.log(person2HoursIntegers);
  }
  person2HoursTotal = person2HoursIntegers.reduce(addToTotal);
  return person2HoursTotal;
  
  
}

function addToTotal(total, num) {
  return total + num;
}


  $('#showTotalHours').click(function(){
    getHours();
    checkFields(person1Hours);
    checkFields(person2Hours);
    checkFields(person1Activities);
    checkFields(person2Activities);
    // for(let i = 0; i < activities.length; i++) {
    //   if(activities[i] == ''){
    //      alert('Input can not be left blank');
    //   }
    //   else{
    //     return activities;
    //   }
    // }
    person1HoursCalculate();
    person2HoursCalculate();
    document.getElementById('person1HoursTotal').innerHTML = person1HoursTotal;
    document.getElementById('person2HoursTotal').innerHTML = person2HoursTotal;
  });


function getActivities(){
  let person1Activity1 = document.getElementById('p1Activity1').value;
  let person1Activity2 = document.getElementById('p1Activity2').value;
  let person1Activity3 = document.getElementById('p1Activity3').value;
  let person1Activity4 = document.getElementById('p1Activity4').value;
  let person1Activity5 = document.getElementById('p1Activity5').value;
  let person2Activity1 = document.getElementById('p2Activity1').value;
  let person2Activity2 = document.getElementById('p2Activity2').value;
  let person2Activity3 = document.getElementById('p2Activity3').value;
  let person2Activity4 = document.getElementById('p2Activity4').value;
  let person2Activity5 = document.getElementById('p2Activity5').value;
  person1Activities.push(person1Activity1);
  person1Activities.push(person1Activity2);
  person1Activities.push(person1Activity3);
  person1Activities.push(person1Activity4);
  person1Activities.push(person1Activity5);
  console.log(person1Activities);
}
let userInput = document.getElementById("dob");
userInput.max = new Date().toISOString().split("T")[0];

function ageChecker(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let fullName = `${firstName} ${lastName}`;
    let message = document.getElementById("age-message");

    let dateOfBirth = new Date(userInput.value);

    let birthDay = dateOfBirth.getDate();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let birthYear = dateOfBirth.getFullYear();

    let currentDate = new Date();

    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let CurrentYear = currentDate.getFullYear();


    let differenceDay = currentDay - birthDay;
    let differenceMonth = currentMonth - birthMonth;
    let differenceYear = CurrentYear - birthYear;


    if(dateOfBirth > currentDate){
        message.textContent = `Invalid date. Please try again!`;
        message.style = "color: red";
        return
    }

            
    if(currentMonth >= birthMonth){
        differenceMonth = currentMonth - birthMonth;
    }

    else{
        differenceYear = differenceYear -1;
        differenceMonth = 12 + currentMonth - birthMonth
    }

    if (currentDay >= birthDay){
        currentDay - birthDay
    }
    else{
        differenceMonth = differenceMonth -1;
        differenceDay = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay
    }

    if(differenceMonth < 0){
        differenceMonth = 11;
        differenceYear = differenceYear -1;
    }

    
    message.textContent = `Hello ${fullName}, 
    You are ${differenceYear} years, ${differenceMonth} months and ${differenceDay} days old.`;
    showModal()
      
    
}

function getDaysInMonth (year, month){
    return new Date(year, month, 0).getDate()
}

function showModal (){
    document.getElementById("pop-up-modal").style.display = "block"
}


function hideModal(){
    document.getElementById("pop-up-modal").style.display ="none"
}
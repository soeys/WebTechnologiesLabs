let btn = document.getElementById('submit');
let userNamem, userAge, userGender, userHobbies, userFeedback;

function show() {
    document.getElementById("summary").style.visibility = 'visible';
}

function close() {
    document.getElementById("summary").style.visibility = 'collapse';
}

btn.addEventListener("click", function () {
    userName = document.getElementById('name').value;
    userAge = document.getElementById('age').value;

    userGender = document.querySelector('input[name="gender"]:checked').value;
    userHobbiesChecked = document.querySelectorAll('input[name="hobbies"]:checked');

    userHobbies = [];
    userHobbiesChecked.forEach((checkbox) => {
        userHobbies.push(checkbox.value);
    });

    userFeedback = document.getElementById('feedback-area').value;

    let summary = document.getElementById('summary');

    
    let summaryStr = `User name is: ${userName}<br>
                  User's age is ${userAge} years old <br>
                  User's gender is ${userGender}<br>
                  User's hobbies are: ${userHobbies}<br>
                  User's opinion on our product: <br>
                  ${userFeedback}`


    summary.innerHTML += summaryStr;
    show();
})


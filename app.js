document.getElementById("submit-btn").addEventListener('click',function(event) 
{
    event.preventDefault();

    let username = document.getElementById("username").value
    let gender = document.getElementById("gender").value
    let birthday = document.getElementById("birthday").value
    let phone = document.getElementById("phone").value
    let diseases = document.getElementById("diseases").value

    let NewPatient = 
    {
        username: username,
        gender: gender,
        birthday: birthday,
        phone: phone,
        diseases: diseases,
    }

    
    render(NewPatient);
    document.getElementById("form").reset();
})

    function render(patient)
    {
        let card = document.createElement('div');
        card.innerHTML = `
        <img src="pic user.png" class="card-img-top" alt="pic user" style="width: 100px; height: 100px; margin-left: 100px; margin-top: 20px;">
        <div class="card-body">
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="font-weight: bold;">Gender: ${patient.username}</li>
            <li class="list-group-item" style="font-weight: bold;">Gender: ${patient.gender}</li>
            <li class="list-group-item" style="font-weight: bold;">Date of Birth: ${patient.birthday}</li>
            <li class="list-group-item" style="font-weight: bold;">Phone Number: ${patient.phone}</li>
            <li class="list-group-item" style="font-weight: bold;">Chronic Diseases: ${patient.diseases}</li>
        </ul>`;
        document.getElementById("patients-card").appendChild(card);
    }





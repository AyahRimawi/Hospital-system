let array=[];

function Person(FullName, gender, birthday, phone, Email, diseases) {
    this.FullName = FullName;
    this.gender = gender;
    this.birthday = birthday;
    this.phone = phone;
    this.Email = Email;
    this.diseases = diseases;
}

function render(event)
    {
        event.preventDefault();
        let pateintForm = event.target;
        let FullName = pateintForm.elements["FullName"].value
        let gender = pateintForm.elements["gender"].value
        let birthday = pateintForm.elements["birthday"].value
        let phone = pateintForm.elements["phone"].value
        let Email = pateintForm.elements["Email"].value
        let diseases =pateintForm.elements["diseases"].value
        let pateint = new Person(FullName, gender, birthday, phone, Email, diseases);
        array.push(pateint);
        localStorage.setItem("pateintArray", JSON.stringify(array));
        let text = JSON.parse(localStorage.getItem("pateintArray"));


        let card = document.createElement('div');
        card.innerHTML = `
        <img src="pic user.png" class="card-img-top" alt="pic user" style="width: 70px; height: 70px; margin-left: 50px; margin-top: 20px;">
        <div class="card-body>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Full Name: ${pateint.FullName}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Gender: ${pateint.gender}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Date of Birth: ${pateint.birthday}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Phone Number: ${pateint.phone}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Email: ${pateint.Email}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Chronic Diseases: ${pateint.diseases}</li>
        </ul>`;
        document.getElementById("patients-card").appendChild(card);
        
    }
    let pateintForm = document.getElementById("form");
    pateintForm.addEventListener("submit", render);














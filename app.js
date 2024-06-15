let array = []; // يجب عليك إضافة هذا السطر إذا لم يكن موجودًا بالفعل في كودك

function Person(FullName, gender, birthday, phone, email, diseases) {
    this.FullName = FullName;
    this.gender = gender;
    this.birthday = birthday;
    this.phone = phone;
    this.email = email;
    this.diseases = diseases;}

function render(event) {
    event.preventDefault();
    let patientForm = event.target;
    let FullName = patientForm.elements["FullName"].value.replace(/\s/g, ''); // إزالة المسافات من FullName
    let gender = patientForm.elements["gender"].value;
    let birthday = patientForm.elements["birthday"].value;
    let phone = patientForm.elements["phone"].value;
    let email = patientForm.elements["email"].value;
    let diseases = patientForm.elements["diseases"].value;
    let password = patientForm.elements["passward"].value;

    let isUserExist = array.some(patient => patient.FullName === FullName);
    if (isUserExist) {
        alert("User already exists. Please use a different name.");
        return;}

    let patient = new Person(FullName, gender, birthday, phone, email, diseases);
    array.push(patient);
    localStorage.setItem("patientArray", JSON.stringify(array));

    let card = document.createElement('div');
    card.innerHTML = `
        <img src="pic user.png" class="card-img-top" alt="pic user" style="width: 70px; height: 70px; margin-left: 50px; margin-top: 20px;">
        <div class="card-body">
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Full Name: ${patient.FullName}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Gender: ${patient.gender}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Date of Birth: ${patient.birthday}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Phone Number: ${patient.phone}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Email: ${patient.email}</li>
            <li class="list-group-item" style="font-weight: bold;margin-left: 20px;">Chronic Diseases: ${patient.diseases}</li>
        </ul>`;
    document.getElementById("patients-card").appendChild(card);}

let patientForm = document.getElementById("form");
patientForm.addEventListener("submit", render);

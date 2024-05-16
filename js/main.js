const loadPricing = () => {
    fetch("https://medi-care-tmgp.onrender.com/medical_package/medical_package/")
        .then((res) => res.json())
        .then((data) => displayPrice(data))
        .catch((err) => console.log(err));
};


const displayPrice = (price) => {

    price.forEach((pric) => {
        const parent = document.getElementById("medical_package");
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="bg-light rounded text-center">
                    <div class="position-relative">
                        <img class="img-fluid rounded-top" src=${pric.image} alt="">
                        <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style="background: rgba(29, 42, 77, .8);">
                            <h3 class="text-primary">${pric.name}</h3>
                            <h1 class="display-4 text-white mb-0">
                                <small class="align-top fw-normal" style="font-size: 22px; line-height: 45px;">$</small>${pric.fee}<small class="align-bottom fw-normal" style="font-size: 16px; line-height: 40px;">/ Year</small>
                            </h1>
                        </div>
                    </div>
                    <div class="text-center py-5">
                        <p>${pric.descriptions}</p>
                        
                        <a href="" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                    </div>
                </div>
        `;
        parent.appendChild(li);
    });
};


const loadServices = () => {
    fetch("https://medi-care-tmgp.onrender.com/services/servicesm/")
        .then((res) => res.json())
        .then((data) => displayService(data))
        .catch((err) => console.log(err));
};

const displayService = (services) => {
    //   console.log(services);
    services.forEach((service) => {
        const parent = document.getElementById("service-container");
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center mb-5">
        <img class="doc-img" src=${service.image} alt="" />
        <h4 class="mb-3">${service.name}</h4>
        <p class="m-0">${service.description}</p>
        <a class="btn btn-lg btn-primary rounded-pill" href="">
            <i class="bi bi-arrow-right"></i>
        </a>
    </div>
        `;
        parent.appendChild(li);
    });
};

fetch('https://medi-care-tmgp.onrender.com/doctor/department/')
    .then(response => response.json())
    .then(data => {
        // Select the dropdown element
        const selectElement = document.getElementById('departmentSelect');

        // Loop through the data and populate the dropdown with options
        data.forEach(department => {
            const option = document.createElement('option');
            option.value = department.id; // Assuming department object has an 'id' property
            option.text = department.name; // Assuming department object has a 'name' property
            selectElement.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching department data:', error);
    });


fetch('https://medi-care-tmgp.onrender.com/doctor/list/')
    .then(response => response.json())
    .then(data => {
        // Select the dropdown element
        const selectElement = document.getElementById('doctorSelect');

        // Loop through the data and populate the dropdown with options
        data.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id; // Assuming department object has an 'id' property
            option.text = doctor.user; // Assuming department object has a 'name' property
            selectElement.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching department data:', error);
    });


// Function to create a team item HTML structure
function createTeamItem(doctor) {
    return `
        <div class="team-item mb-5">
            <div class="row g-0 bg-light rounded overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                    <img class="img-fluid h-100" src="${doctor.image}" style="object-fit: cover;">
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                    <div class="mt-auto p-4">
                        <h3>Dr.${doctor.user}</h3>
                        <h6 class="fw-normal fst-italic text-primary mb-4">${doctor.specialization}</h6>
                        <p class="m-0">${doctor.designation}</p>
                    </div>
                    <div class="d-flex mt-auto border-top p-4">
                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fetch team data from the API
fetch('https://medi-care-tmgp.onrender.com/doctor/list/')
    .then(response => response.json())
    .then(team => {
        const teamContainer = document.getElementById('teamContainer');
        team.forEach(doctor => {
            const teamItemHtml = createTeamItem(doctor);
            teamContainer.innerHTML += teamItemHtml;
        });
    })
    .catch(error => {
        console.error('Error fetching team data:', error);
    });


document.getElementById('submitBtn').addEventListener('click', function() {
    const department = document.getElementById('departmentSelect').value;
    console.log(department);
    const doctor = document.getElementById('doctorSelect').value;
    console.log(doctor);
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;

    const formData = {

        name: name,
        email: email,
        date: date,
        time: time,
        doctor: doctor,
        department: department,
    };

    // Send form data to REST API
    fetch('https://medi-care-tmgp.onrender.com/appointment/appointment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
});

function register() {
    // Get form data
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("nayem");

    // Construct request body
    const requestBody = {
        username: username,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    };

    // Send POST request to API
    fetch('https://medi-care-tmgp.onrender.com/patient/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful response
            console.log('Registration successful:', data);
            // Optionally, redirect user or show a success message
        })
        .catch(error => {
            // Handle error
            console.error('Error during registration:', error);
            // Optionally, display an error message to the user
        });
}


loadPricing();
loadServices();

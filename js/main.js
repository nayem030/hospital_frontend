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
                                <small class="align-top fw-normal" style="font-size: 22px; line-height: 45px;">$</small>49<small class="align-bottom fw-normal" style="font-size: 16px; line-height: 40px;">/ Year</small>
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
        <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
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

loadPricing();
loadServices();
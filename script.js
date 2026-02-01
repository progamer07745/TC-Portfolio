// Defining projects
const projects = [{
        title: "عداد الإستغفار",
        category: "web",
        desc: "description of front-end project",
        link: "https://istighfar-counter.pages.dev",
        delay: "0",
        image: "assets/images/WEB photos/istighfar-counter.png"
    },
    {
        title: "Study Buddy",
        category: "web",
        image: "assets/images/WEB photos/Study Buddy.png",
        desc: "description of 2nd-front-end project",
        link: "",
        delay: "100",
    },
    {
        title: "3rd-Front-End project",
        category: "web",
        image: "",
        desc: "description of 3rd-front-end project",
        link: "",
        delay: "100",
    },
    {
        title: "Coffee Break",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/1.png",
        delay: "200",

    },
    {
        title: "Jordan Shoes",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/2.png",
        delay: "300",

    },
    {
        title: "Special Coffee",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/3.png",
        delay: "400",

    },
    {
        title: "Valentino Perfume",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/4.png",
        delay: "500",

    },
    {
        title: "Burger",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/5.png",
        delay: "600",

    },
    {
        title: "Trio Market",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/6.png",
        delay: "600",

    },
    {
        title: "Cup Cake",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/7.png",
        delay: "600",

    },
    {
        title: "AirPods",
        category: "design",
        desc: "description for the image",
        image: "assets/images/Graphic photos/8.png",
        delay: "600",

    },
    {
        title: "HTML, CSS Image",
        category: "Thumbnails",
        desc: "description for the image",
        image: "assets/images/Graphic photos/9.png",
        delay: "600",

    },
    {
        title: "AI Tools",
        category: "Thumbnails",
        desc: "description for the image",
        image: "assets/images/Graphic photos/10.png",
        delay: "600",

    },
    {
        title: "ChatGPT",
        category: "Thumbnails",
        desc: "description for the image",
        image: "assets/images/Graphic photos/11.png",
        delay: "600",

    },
];

const certificates = [{
        title: "HTML, CSS Certificate from Mahara-Tach",
        desc: "Completion certificate from Mahara-Tech",
        image: "assets/images/Certificates images/html, css from Mahara-Tech.png",
        delay: "100"
    },
    {
        title: "HTML Certificate from ElSatr Platform",
        desc: "Completion certificate in HTML from ElSatr Platform",
        image: "assets/images/Certificates images/certificate html.png",
        delay: "200"
    },
    {
        title: "CSS Certificate from ElSatr Platforrm",
        desc: "Completion certificate in CSS from ElSatr Platform",
        image: "assets/images/Certificates images/certificate css.png",
        delay: "300"
    },
    {
        title: "Bootstrap Certificate from ElSatr Platforrm",
        desc: "Completion certificate in Bootstrap from ElSatr Platform",
        image: "assets/images/Certificates images/certificate bootstrap.png",
        delay: "400"
    },
    {
        title: "C# Certificate from Microsoft",
        desc: "C# Certificate from Microsoft",
        image: "assets/images/Certificates images/C# certificate (mohamed khaled).jpeg",
        delay: "500"
    },
]

// function to render the projects
function renderProjects() {
    const projectsGrid = document.querySelector(".projects-grid");
    if (!projectsGrid) return;
    projectsGrid.innerHTML = projects
        .map((proj) => {
            // لو المشروع تصميم (Design)
            if (proj.category === "design" || proj.category === "Thumbnails") {
                return `
                <div class="project-item design" data-aos="zoom-in">
                    <a href="${proj.image}" class="glightbox project-media-link">
                        <div class="project-media">
                            <img src="${proj.image}" alt="${proj.title}" class="project-image" />
                            
                            <div class="dev-overlay">
                                <i class="fas fa-search-plus arrow-icon"></i>
                                <span class="btn-text">View Design</span>
                            </div> 
                        </div>
                    </a>
                                
                    <div class="project-info">  
                        <h4>${proj.title}</h4>
                        <p>${proj.desc}</p>
                    </div>
                </div>`;
            } else {
                return `
                    <div class="project-item web" data-aos="zoom-in">
                        <div class="project-media">
                        <a href="${proj.link}" target="_blank" class="project-media-link">
                            <img src="${proj.image}" alt="${proj.title}" class="project-image" />
                            <div class="dev-overlay">
                                <i class="fas fa-external-link-alt arrow-icon"></i>
                                <span class="btn-text">View Live</span>
                            </div>
                            </a> 
                        </div>
                        <div class="project-info">  
                            <h4>${proj.title}</h4>
                            <p>${proj.desc}</p>
                        </div>
                    </div>`;
            }
        }).join("");
}

renderProjects();

// function to render the certificates
function renderCertificates() {
    const certificatesGrid = document.querySelector(".certificates-grid");
    if (!certificatesGrid) return;
    certificatesGrid.innerHTML = certificates
        .map((c) => {
            return `
                <div class="project-item certificate" data-aos="zoom-in">
                    <a href="${c.image}" class="glightbox project-media">
                        <div class="project-media">
                            <img src="${c.image}" alt="${c.title}" class="project-image" />
                             <div class="dev-overlay">
                                <i class="fas fa-search-plus arrow-icon"></i>
                                <span class="btn-text">View Certificate</span>
                            </div> 
                        </div>
                    </a>

                    <div class="project-info">
                        <h4>${c.title}</h4>
                        <p>${c.desc}</p>
                    </div>
                </div>
            `
        }).join("");
}

renderCertificates();

const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true
})

// scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("#navbar");
    if (window.scrollY > 50) {
        nav.style.padding = "15px 8%";
        nav.style.background = "rgba(2, 6, 23, 0.95)";
        nav.style.borderBottom = "1px solid rgba(90, 164, 237, 0.2)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(2, 6, 23, 0.8)";
        nav.style.borderBottom = "none";
    }
});

// filtering logic for projects section

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // activate button toggle
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filterData = btn.getAttribute("data-filter");
        const projectItems = document.querySelector(".projects-grid").querySelectorAll(".project-item");

        projectItems.forEach((item) => {
            if (filterData === "all" || item.classList.contains(filterData)) {
                item.style.display = "block";
                item.style.animation = "fadeIn 0.5s ease forwards";
            } else {
                item.style.display = "none";
            }
        });
    });
});

window.onload = function () {
    Swal.fire({
        dir: "rtl",
        title: 'Work in Progress!',
        text: 'الموقع لسه قيد التطوير،بنضيف الصور وبنظبط الأداء حالياً.',
        icon: 'info',
        confirmButtonText: 'وريني الشغل برضو',
        background: '#04111f',
        color: '#fff',
        confirmButtonColor: '#00a7c9'
    });
};
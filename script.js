function updateDateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    var datetimeString = 'Päivämäärä: ' + day + '.' + month + '.' + year + ' | Kellonaika: ' + hours + ':' + minutes + ':' + seconds;
    var datetimeElement = document.getElementById("current-datetime");
    if (datetimeElement) {
        datetimeElement.innerText = datetimeString;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Product data (34)
var productsData = [
    // Paneelit
    { name: "Helmiponttipaneeli", img: "images/Helmiponttipaneeli.png", desc: "14-21 x 70-195mm", category: "paneelit" },
    { name: "Sormipaneeli", img: "images/Sormipaneeli.png", desc: "21 x 95mm", category: "paneelit" },
    { name: "STP-paneeli", img: "images/STP-paneeli.png", desc: "18 x 95mm", category: "paneelit" },
    { name: "STV-paneeli", img: "images/STV-paneeli.png", desc: "14-21 x 70-195mm", category: "paneelit" },
    { name: "Valeponttipaneeli", img: "images/Valeponttipaneeli.png", desc: "14 x 95mm", category: "paneelit" },

    // Kattolistat
    { name: "Kattolista", img: "images/Kattolista.png", desc: "34 x 170mm", category: "kattolistat" },
    { name: "Kattolista 2", img: "images/Kattolista2.png", desc: "15 x 40mm", category: "kattolistat" },
    { name: "Kattolista 3", img: "images/Kattolista3.png", desc: "15 x 45mm", category: "kattolistat" },
    { name: "Kattolista 4", img: "images/Kattolista4.png", desc: "15 x 70mm", category: "kattolistat" },
    { name: "Kattolista 5", img: "images/Kattolista5.png", desc: "15 x 65mm", category: "kattolistat" },
    { name: "Kattolista 6", img: "images/Kattolista6.png", desc: "15 x 62mm", category: "kattolistat" },
    { name: "Kattolista 7", img: "images/Kattolista7.png", desc: "21 x 95mm", category: "kattolistat" },
    { name: "Kattolista 8", img: "images/Kattolista8.png", desc: "21 x 120mm", category: "kattolistat" },

    // Peitelistat & Jalkalistat
    { name: "Koriste L-lista (ankka)", img: "images/Koriste L-lista (ankka).png", desc: "21 x 40mm", category: "peitelistat" },
    { name: "Koriste L-lista", img: "images/Koriste L-lista.png", desc: "21 x 45mm", category: "peitelistat" },
    { name: "Koristelista", img: "images/Koristelista.png", desc: "15 x 30mm", category: "peitelistat" },
    { name: "Koristelista 2", img: "images/Koristelista2.png", desc: "21 x 40mm", category: "peitelistat" },
    { name: "Kruunulista", img: "images/Kruunulista.png", desc: "34 x 120mm", category: "peitelistat" },
    { name: "L-lista", img: "images/L-lista.png", desc: "28 x 28mm", category: "peitelistat" },
    { name: "Lattialista", img: "images/Lattialista.png", desc: "21 x 45mm", category: "peitelistat" },
    { name: "Lattialista 2", img: "images/Lattialista2.png", desc: "12 x 42mm", category: "peitelistat" },
    { name: "Lattialista 3", img: "images/Lattialista3.png", desc: "21 x 95-120mm", category: "peitelistat" },
    { name: "Lyöntilista", img: "images/Lyöntilista.png", desc: "15 x 40mm", category: "peitelistat" },
    { name: "Rännilankku", img: "images/Rännilankku.png", desc: "45 x 120mm", category: "peitelistat" },
    { name: "Varjolista", img: "images/Varjolista.png", desc: "15 x 20mm", category: "peitelistat" },
    { name: "Vuorilista", img: "images/Vuorilista.png", desc: "21 x 120mm", category: "peitelistat" },
    { name: "Vuorilista 2", img: "images/Vuorilista2.png", desc: "17-21 x 95-120mm", category: "peitelistat" },
    { name: "Vuorilista 3", img: "images/Vuorilista3.png", desc: "15 x 70mm", category: "peitelistat" },
    { name: "Vuorilista 4", img: "images/Vuorilista4.png", desc: "12 x 42mm", category: "peitelistat" },
    { name: "Vuorilista 5", img: "images/Vuorilista5.png", desc: "15 x 70mm", category: "peitelistat" },
    { name: "Vuorilista 6", img: "images/Vuorilista6.png", desc: "21 x 95mm", category: "peitelistat" },
    { name: "Vuorilista 7", img: "images/Vuorilista7.png", desc: "21 x 95mm", category: "peitelistat" },
    { name: "Vuorilista 8", img: "images/Vuorilista8.png", desc: "21 x 120mm", category: "peitelistat" }
];

// elements
var container = document.getElementById("products-container");
var modal = document.getElementById("product-modal");
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDesc = document.getElementById("modal-desc");
var closeBtn = document.getElementsByClassName("close")[0];

// render products...
function renderProducts(products) {
    container.innerHTML = ""; // clear previous
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var div = document.createElement("div");
        div.className = "product";
        div.setAttribute("data-category", product.category);

        div.innerHTML = '<h3>' + product.name + '</h3>' +
                        '<img src="' + product.img + '" alt="' + product.name + '" data-title="' + product.name + '" data-desc="' + product.desc + '">';
        container.appendChild(div);
    }

    // modal click events
    var imgs = document.querySelectorAll(".product img");
    for (var j = 0; j < imgs.length; j++) {
        imgs[j].addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalTitle.textContent = this.dataset.title;
            modalDesc.textContent = this.dataset.desc;
        });
    }
}

// Render
renderProducts(productsData);

// Filter function
function filterProducts(category, element) {
    var categoryItems = document.querySelectorAll(".category-menu li");
    for (var i = 0; i < categoryItems.length; i++) {
        categoryItems[i].classList.remove("active");
    }
    element.classList.add("active");

    var filtered = [];
    if (category === "all") {
        filtered = productsData;
    } else {
        for (var i = 0; i < productsData.length; i++) {
            if (productsData[i].category === category) {
                filtered.push(productsData[i]);
            }
        }
    }

    renderProducts(filtered);
}

// Modal logic
closeBtn.onclick = function() { modal.style.display = "none"; }
modal.onclick = function(event) { if (event.target === modal) modal.style.display = "none"; }

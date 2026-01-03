//order form
const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const orderDetails =
            "NEW FLOWER ORDER\n\n" +
            "Name: " + document.getElementById("name").value + "\n" +
            "Order: " + document.getElementById("order").value + "\n" +
            "Contact Number: " + document.getElementById("contactNumber").value + "\n" +
            "Complete Address: " + document.getElementById("address").value + "\n" +
            "Color: " + document.getElementById("color").value + "\n" +
            "Add-on/s: " + document.getElementById("addons").value + "\n" +
            "Mode of Delivery: " + document.getElementById("delivery").value + "\n\n" +
            "Payment: 50% Down Payment via GCash\n" +
            "Customer Confirmation: Agreed to terms and conditions";

        navigator.clipboard.writeText(orderDetails).then(() => {
            alert("Order details copied! Please paste and send this to the seller.");
            orderForm.reset();
        }).catch(() => {
            alert("Copy failed. Please copy the details manually.");
        });
    });
}
//gallery scroll arrow
function scrollGallery(direction) {
    const slider = document.getElementById("slider");
    if (!slider) return;

    const scrollAmount = 200;
    slider.scrollLeft += direction * scrollAmount;
}
//gallery zoom
let galleryImages = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    galleryImages = document.querySelectorAll("#slider img");
});

function openImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = img.src;

    currentIndex = Array.from(galleryImages).indexOf(img);
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    } else if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    document.getElementById("modalImage").src =
        galleryImages[currentIndex].src;
}
// smooth nav
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});


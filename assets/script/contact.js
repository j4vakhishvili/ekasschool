const cForm = document.getElementById("cForm")

function openNav() {
    cForm.style.transform = "translateY(0)";
    cForm.style.opacity = "100%";
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    cForm.style.transform = "translateY(200%)";
    cForm.style.opacity = "0";
    document.body.style.overflow = 'auto';
}
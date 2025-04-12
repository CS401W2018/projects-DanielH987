// Dynamically load the header, navigation, and footer
document.getElementById("header").innerHTML = `
    <header>
        <h1>French Polynesia Photo Tour</h1>
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </header>
`;

document.getElementById("nav").innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="tahiti.html">Tahiti</a></li>
            <li><a href="bora_bora.html">Bora Bora</a></li>
            <li><a href="moorea.html">Moorea</a></li>
            <li><a href="huahine.html">Huahine</a></li>
            <li><a href="rangiroa.html">Rangiroa</a></li>
        </ul>
    </nav>

`;
document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname.split("/").pop(); // Get current filename
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});

document.getElementById("footer").innerHTML = `
    <footer>
        <p>&copy; 2025 Daniel Hootini</p>
    </footer>
`;

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/x-icon";
favicon.href = "./images/favicon.ico";
document.head.appendChild(favicon);
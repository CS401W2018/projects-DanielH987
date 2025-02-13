// Dynamically load the header, navigation, and footer
document.getElementById("header").innerHTML = `
    <header>
        <h1>French Polynesia Photo Tour</h1>
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

document.getElementById("footer").innerHTML = `
    <footer>
        <p>&copy; 2025 Daniel Hootini</p>
    </footer>
`;

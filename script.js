    // Función para inicializar la pestaña activa
    function initializeActiveTab() {
        var defaultTab = document.getElementsByClassName("tablinks")[0];
        openTab(null, 'Inicio'); // Usa 'null' como evento ya que no se hace clic
    }

    document.addEventListener("DOMContentLoaded", function() {
    openTab(null, 'Inicio');; // Inicializa la pestaña activa
    loadVideoDetails(); // Carga los detalles del video

    // Configuración del botón de cambio de tema
    var themeToggleButton = document.getElementById("themeToggle");
    themeToggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        themeToggleButton.innerHTML = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    });
});

// Modifica la función openTab para manejar el caso cuando 'evt' es 'null'
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "flex";
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var themeToggleButton = document.getElementById("themeToggle");

    themeToggleButton.addEventListener("click", function() {
        var isDarkMode = document.body.classList.toggle("dark-mode");
        themeToggleButton.innerHTML = isDarkMode ? "🌙" : "☀️";
    });
});

    // Función para cargar los detalles del video
    function loadVideoDetails() {
        var videoId = 'NtTbJuStJXg'; // ID del video de YouTube
        var apiKey = 'TU_CLAVE_API'; // Reemplaza con tu clave API de Google
        var url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                var details = data.items[0].snippet;
                document.getElementById('videoDetails').innerHTML = `
                    <h3>${details.title}</h3>
                    <p>${details.description}</p>
                `;
            })
            .catch(error => console.error('Error:', error));
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("Inicio").style.display = "block";
        document.getElementsByClassName("tablinks")[0].className += " active";
        loadVideoDetails(); // Carga los detalles del video al cargar la página
    });

    document.addEventListener("DOMContentLoaded", function() {
    var themeToggleButton = document.getElementById("themeToggle");

    themeToggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")) {
            themeToggleButton.innerHTML = "🌙"; // Icono de luna para el modo oscuro
        } else {
            themeToggleButton.innerHTML = "☀️"; // Icono de sol para el modo claro
        }
    });

    // Configuración inicial del botón según el modo actual
    if(document.body.classList.contains("dark-mode")) {
        themeToggleButton.innerHTML = "🌙";
    } else {
        themeToggleButton.innerHTML = "☀️";
    }
});

}

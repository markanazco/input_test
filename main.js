// main.js

// 1. Importamos las funciones necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// 2. Configuración de tu proyecto Firebase (la que copiaste de la consola)
const firebaseConfig = {
  apiKey: "AIzaSyBfsRtEAe3enNuXRZZ0Ex5ewdYOYrzDzoQ",
  authDomain: "touch-input-test.firebaseapp.com",
  databaseURL: "https://touch-input-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "touch-input-test",
  storageBucket: "touch-input-test.firebasestorage.app",
  messagingSenderId: "999206060657",
  appId: "1:999206060657:web:5af8cf061b05db6c0ad1d0"
};

// 3. Inicializar Firebase
const app = initializeApp(firebaseConfig);

// 4. Inicializar la Realtime Database
const db = getDatabase(app);

// 5. Capturamos referencia a nuestro botón en el HTML
const btnEnviar = document.getElementById('btnEnviar');

// 6. Configuramos el evento para que, al hacer clic, guarde los datos en la DB
btnEnviar.addEventListener('click', () => {
  const edad = document.getElementById('edad').value;
  const sexo = document.getElementById('sexo').value;
  const texto = document.getElementById('texto').value;

  // Validaciones mínimas
  if (!edad || !sexo || !texto) {
    alert("Por favor ingresa todos los datos.");
    return;
  }

  // 7. Guardar los datos en la ruta "datos" de la DB
  //    'push()' crea una nueva entrada con una key única
  const nuevaRef = push(ref(db, 'datos')); 
  set(nuevaRef, {
    edad: edad,
    sexo: sexo,
    texto: texto,
    timestamp: Date.now()
  })
  .then(() => {
    alert("Datos guardados en Firebase");
  })
  .catch((error) => {
    console.error("Error al guardar:", error);
    alert("Ocurrió un error guardando los datos.");
  });
});

🔮 Grimorio & Agenda Mística

Una Progressive Web App (PWA) diseñada para ser tu santuario personal. Combina la estructura de una agenda ejecutiva con la magia de un grimorio esotérico, permitiéndote organizar tu día a día mientras cultivas tu mundo interior.

Todo el procesamiento y almacenamiento de datos se realiza localmente en el dispositivo (localStorage), garantizando privacidad absoluta bajo un sello de seguridad numérico.

✨ Características Principales

🔒 Sello de Seguridad (Pantalla de Bloqueo): Acceso protegido mediante un PIN numérico de 6 dígitos y una animación inmersiva de escáner dactilar mágico.

📅 Agenda y Cronología: Registro de citas por horas, gestor de hábitos diarios y pergaminos de reflexión matutina/nocturna.

📖 El Santuario (Grimorio):

Ecos del Alma: Notas rápidas y reflexiones profundas.

Manifestaciones: Seguimiento de metas esotéricas y proyectos con barra de progreso.

Biblioteca Hermética: Consulta de los 7 principios herméticos, Kabbalah y más.

Tríada Astral: Tu carta natal (Sol, Luna y Ascendente) configurada dinámicamente y expuesta sobre un sistema orbital animado encima del Cubo de Metatrón.

🎴 Oráculo de Premonición: Una tirada de Tarot de 3 cartas diarias (pasado, presente, futuro) interactiva, con opción de barajar, cortar y almacenar reflexiones de la lectura.

🐾 Vínculo de Sangre (Familiares): Adopta un Gato, Rata o Murciélago. Aliméntalos, acarícialos e invócalos para ganar tributos y subirlos de nivel (hasta 3 fases de evolución). Tu mascota aparecerá flotando de forma global en la aplicación.

🌕 Fases Lunares: Cálculo automático de la fase lunar del día actual y consejos de manifestación.

💾 Custodia (Copias de Seguridad): Exporta e importa todos tus datos en un archivo .json de forma segura.

🛠️ Tecnologías Utilizadas

Frontend: HTML5, JavaScript (Vanilla ES6+).

Estilos: Tailwind CSS (vía CDN) para un diseño responsivo y modo oscuro nativo.

Iconografía: Lucide Icons.

Tipografías: Google Fonts (Cormorant Garamond, Caveat, Inter, Kalam).

PWA: manifest.json y sw.js (Service Worker) para soporte de instalación local y trabajo sin conexión.

📱 Cómo Instalar y Usar

Esta aplicación está construida para funcionar directamente desde el navegador de tu móvil o PC, comportándose como una aplicación nativa si se añade a la pantalla de inicio.

Opción 1: Uso directo (Recomendado)

Accede al enlace de GitHub Pages del proyecto: https://[tu-usuario].github.io/mi-grimorio/

La primera vez que entres, te pedirá establecer un PIN de 6 dígitos. Este será tu código de acceso para siempre.

Para la mejor experiencia en Móvil:

Chrome (Android): Toca los 3 puntos arriba a la derecha y selecciona "Añadir a pantalla de inicio".

Safari (iOS): Toca el botón de Compartir y selecciona "Añadir a la pantalla de inicio".
¡Ahora se abrirá a pantalla completa sin barras de navegador!

Opción 2: Para Desarrolladores (Testeo Local)

Clona el repositorio:

git clone https://github.com/[tu-usuario]/mi-grimorio.git


Inicia un servidor local. Por ejemplo, con Python:

python3 -m http.server 8000


Abre http://localhost:8000 en tu navegador.

⚙️ Configuración de tu Carta Natal

Una vez dentro de la aplicación, puedes personalizar tu Tríada Astral:

Haz clic en el botón de Ajustes (Engranaje) en la esquina superior derecha.

Selecciona tu signo Solar, Lunar y Ascendente.

Haz clic en "Guardar Ajustes". El sistema orbital del Grimorio se actualizará automáticamente con tu información.

📂 Estructura de Archivos

index.html: Archivo principal que contiene toda la estructura, lógica JavaScript y estilos.

sw.js: Service Worker encargado de cachear los archivos para su uso offline.

manifest.json: Configuración PWA para colores, nombre e iconos de la aplicación.

*.png / *.jpg: Ilustraciones esotéricas, lunas y fases de evolución de las mascotas.

⚠️ Advertencia sobre Datos

Al no existir una base de datos en la nube, los datos viven exclusivamente en el navegador de tu dispositivo. Si vas a cambiar de teléfono o limpiar el historial/caché a fondo, recuerda usar primero la herramienta de Custodia del Grimorio (Exportar Datos).

Hecho con magia y código. ✨
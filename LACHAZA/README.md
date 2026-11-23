# 🍽️ LaChaza · Hyntiba

Sitio web del menú de **LaChaza**, un negocio de comida casera cerca de la Universidad Uniagustiniana (sede Tagaste, Avenida Cali, Kennedy, Bogotá). Muestra los productos en tarjetas interactivas y reúne los canales de contacto y pedido en una sola página.

<!-- Cuando publiques el sitio con GitHub Pages, agrega aquí el enlace:
🔗 **Demo:** https://TU-USUARIO.github.io/LaChaza/
-->

---

## ✨ Características

- **Menú con tarjetas interactivas:** cada producto tiene una tarjeta que gira (*flip card*) al hacer clic. En el frente muestra la imagen, la descripción y los precios; en el reverso, más detalles del producto.
- **Accesible con teclado:** las tarjetas se pueden enfocar y girar con `Enter` o `Espacio`.
- **Saludo dinámico:** el mensaje de bienvenida cambia según la hora (buenos días, buenas tardes o buenas noches).
- **Diseño responsivo:** se adapta a computador, tableta y celular (puntos de quiebre en 1024 px, 768 px y 480 px).
- **Tema oscuro con identidad propia:** paleta roja y amarilla definida con variables CSS, y tipografías *Oswald* y *Montserrat*.
- **Carga optimizada:** imágenes con carga diferida (`loading="lazy"`) y precarga de fuentes.
- **Canales de contacto:** enlaces a Instagram, Facebook, WhatsApp y Google Maps.
- **Año actualizado automáticamente** en el pie de página.

---

## 🍴 Productos del menú

- Empanadas (tradicional, jardinería, trasfísica y ranchera)
- Arepas y combo de arepas
- Arepa con jamón y queso
- Tinto
- Papas rellenas
- Hamburguesas
- Gaseosas y jugos

---

## 🛠️ Tecnologías

| Tecnología | Uso |
| --- | --- |
| **HTML5** | Estructura semántica, `lang="es"` y metaetiquetas básicas de SEO |
| **CSS3** | Variables CSS, Flexbox, Grid, transformaciones 3D y diseño responsivo |
| **JavaScript (vanilla)** | Giro de tarjetas, saludo por hora y año dinámico, sin librerías externas |
| **Google Fonts** | Tipografías Montserrat y Oswald |
| **SVG en línea** | Íconos de redes sociales |

---

## 📁 Estructura del proyecto

```text
LaChaza/
├── index.html        # Página principal: inicio, menú y contacto
├── cal.html          # Calculadora de pedido (ejercicio de JavaScript)
├── inde.html         # Página de prueba de JavaScript
├── css/
│   └── style.css     # Estilos globales, responsivo y animación 3D
├── js/
│   └── main.js       # Giro de tarjetas, saludo por hora y año dinámico
└── img/              # Logo y fotos de los productos
```

### Archivos adicionales

- **`cal.html`:** pequeña calculadora de pedido. Lista 12 productos con su precio, pide por ventana emergente el número del producto y la cantidad, y muestra el total a pagar.
- **`inde.html`:** página de práctica con un botón que cambia el texto de la página mediante JavaScript.

---

## 💻 Ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Cristi-ronaldo/LaChaza.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd LaChaza
   ```
3. Abre `index.html` en tu navegador, o usa la extensión **Live Server** de VS Code.

No necesita instalación de dependencias ni servidor: es un sitio estático.

---

## 🚀 Publicación en GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Source**, elige la rama `main` y la carpeta `/ (root)`.
3. Guarda y espera un par de minutos: GitHub mostrará el enlace del sitio.

---

## 🔮 Posibles mejoras

- Buscador o filtros por categoría en el menú.
- Carrito de pedido que envíe el resumen por WhatsApp.
- Integrar `cal.html` dentro de la página principal.
- Versión en modo claro.

---

## 👤 Autor

Creado por **Cristian Lozano**

- GitHub: [@Cristi-ronaldo](https://github.com/Cristi-ronaldo)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

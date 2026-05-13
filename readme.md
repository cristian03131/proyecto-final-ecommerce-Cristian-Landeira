Nombre del Proyecto: Reino del Alfajor

Descripción:
Este proyecto es una página web básica desarrollada como parte de un curso de Front-End.
La página está estructurada con HTML semántico y utiliza las etiquetas `<header>`,
`<main>`, y `<footer>` para organizar el contenido. El objetivo es aprender a crear la
estructura básica de una página web y prepararla para futuras mejoras con CSS y
JavaScript.

Configuración de Formspree

Para el formulario de contacto de este proyecto, se integró la herramienta Formspree.

¿Cómo se configuró?

Se creó un formulario en el dashboard de Formspree vinculado a mi correo electrónico.
Se copió el "Endpoint" (la URL única) y se pegó en el atributo action de la etiqueta <form> en el archivo contacto.html.
Se aseguró que el método de envío fuera method="POST".
Se asignó el atributo name a cada campo (nombre, email, mensaje) para que los datos lleguen identificados correctamente al correo.

¿Por qué es útil?

Formspree es una herramienta fundamental para desarrolladores Front-End que están aprendiendo, ya que permite que un formulario estático (solo HTML) funcione y envíe correos reales sin necesidad de programar un servidor (Back-End) con PHP, Node.js o bases de datos. Facilita la interactividad de forma rápida y segura.

Inspección de Tabla
Siguiendo la consigna, se utilizó la herramienta de inspección del navegador (F12) para verificar:

Estructura: Confirmación de que el colspan ocupa el ancho total de la tabla.
Box Model: Ajuste de bordes y alineación del texto centrado en la fila de mensajes pendientes.
Estilos: Prueba de cambios de color en caliente para mejorar la legibilidad de los datos de contacto.
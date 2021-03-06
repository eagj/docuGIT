# Documentación sobre Git

## Qué es Git
<br/>
&nbsp;
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png">

Git (pronunciado «guit»/gɪt) es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.

Git es un control de versiones con el cual generamos copias (**commit**) de los avances de un proyecto pudiendo regresar un punto anterior (**checkout**, **merge**, **reset**) gracias los numeros **ID** que asigna en cada copia (**log**) Una vez realizados los cambios podemos subirlos a un servidor remoto (**push**) o traerlos de este (**pull**).

<img src="https://raw.githubusercontent.com/eagj/docuGIT/main/src/.vuepress/public/assets/img/esquemaGit.jpeg">


La gran ventaja de Git frente a otros controles de versiones es que cada ordenador funciona como servidor, por lo que si falla el servidor central o cualquier ordenador, tendremos una copia total del proyecto en nuestro ordenador.

<img src="https://raw.githubusercontent.com/eagj/docuGIT/main/src/.vuepress/public/assets/img/gitvssvn.jpeg">


Las posibilidades de crear ramas (**branch**) permite a cada miembro del equipo en trabajar en su parte sin interferir en el trabajo de los demas y una vez finalizado poder "*fusionar*" (**merge**) todo a la rama principal(**main**)

<img src="https://raw.githubusercontent.com/eagj/docuGIT/main/src/.vuepress/public/assets/img/ramas-ejemplos_merge.jpeg">
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{403:function(a,e,o){"use strict";o.r(e);var r=o(31),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"_01-creacion-de-repositorios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_01-creacion-de-repositorios"}},[a._v("#")]),a._v(" 01 Creación de repositorios")]),a._v(" "),o("h2",{attrs:{id:"git-init"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[a._v("#")]),a._v(" Git init")]),a._v(" "),o("p",[a._v("El primer paso para la creación de un repositiorio git es mediante el comando:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git init")])])]),a._v(" "),o("p",[a._v("Esto creará una carpeta oculta llamada "),o("em",[a._v(".git")]),a._v(" en la cual se guardará toda la información del proyecto. Este comando solo se ejecutará una vez en nuestro proyecto, ya que una vez usado ya habrá creado esa carpeta "),o("em",[a._v(".git")]),a._v(" y no habrá que volver a usarlo en ese ordenador para ese proyecto.")]),a._v(" "),o("p",[a._v("Este comando creará dos areas en nuestro proyecto, una de estas areas es la llamada "),o("strong",[a._v("Staging area")]),a._v(" o area de ensayo y el otro area es el "),o("strong",[a._v("repositorio local")]),a._v(" ("),o("strong",[a._v("repository")]),a._v("). Aunque todo esto se hará de manera transparente a nosotros, ya que nosotros seguiremos trabajando en nuestro "),o("strong",[a._v("directorio de trabajo")]),a._v(" ("),o("strong",[a._v("working directory")]),a._v(").")]),a._v(" "),o("p",[a._v("El "),o("strong",[a._v("staging area")]),a._v(" es el area donde hacemos un seguimiento de los archivos hayamos seleccionado ("),o("strong",[a._v("add")]),a._v("). Este area del "),o("strong",[a._v("repositorio local")]),a._v(" o "),o("strong",[a._v("staging area")]),a._v(" es el lugar donde se han mandado todos los cambios ("),o("strong",[a._v("commit")]),a._v(").")]),a._v(" "),o("p",[a._v("En resumidas cuentas nosotros trabajamos en nuestro "),o("strong",[a._v("working directory")]),a._v(" y cuando hacemos cambios podemos pasar esos archivos a nuestro "),o("strong",[a._v("staging area")]),a._v(" y una vez hechas todas las modificaciones pasar todos esos cambios a nuestro "),o("strong",[a._v("repository")]),a._v(" el cual creará un punto de versión al que podremos acceder en cualquier momento para revisarlo.")]),a._v(" "),o("p",[o("img",{attrs:{src:"assets/img/areas-trabajo-init.png",alt:"Areas de trabajo"}})]),a._v(" "),o("h2",{attrs:{id:"git-add"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[a._v("#")]),a._v(" Git add")]),a._v(" "),o("p",[a._v("Mientras trabajamos en nuestra carpeta local y una vez que hemos modificado, borrado, o creado archivos tenemos que decirle a git que pase esos archivos al staging area y eso se consigue con:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git add <nombre_archivo>")])])]),a._v(" "),o("p",[a._v("Una vez ejecutado este comando, git hace un seguimiento de este archivo (y no de los que no se hayan añadido) ya que se encuentra en el staging area. Todo este proceso lo hace de manera transparente a nosotros, ya que nosotros seguimos viendo nuestra carpeta local, pero internamente ese archivo, al estar en el staging area, estará continuamente siendo revisado en cada cambio que hagamos.")]),a._v(" "),o("p",[a._v("Si por otro lado hemos modificado/creado/borrado muchos archivos, en vez de ir haciendo "),o("em",[a._v("add")]),a._v(" de cada uno, podemos pasar todos al staging area con:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git add .")])])]),a._v(" "),o("h2",{attrs:{id:"git-commit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[a._v("#")]),a._v(" Git commit")]),a._v(" "),o("p",[a._v("una vez tengamos todos nuestros archivos en nuestra stagging area, para pasarlos a nuestro repositorio local hay que ejecutar el comando:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v('git commit -m "nombre descriptivo de la subida"')])])]),a._v(" "),o("p",[a._v('De este modo hemos creado una "'),o("em",[a._v("instantanea")]),a._v('" o respaldo de nuestro trabajo hasta ese momento y nuestro stagin area quedará vacio ya que todo se ha pasado al repositorio local. De este modo acabamos de crear un punto de respaldo, al que podremos acceder más adelante mediante un ID que se le ha asignado. Cada commit no machaca el anterior, simplemente crea nuevos puntos cada uno con su propio ID.')]),a._v(" "),o("p",[o("img",{attrs:{src:"/img/areas-trabajo-init.png",alt:"Areas de trabajo"}})]),a._v(" "),o("h2",{attrs:{id:"git-status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[a._v("#")]),a._v(" Git status")]),a._v(" "),o("p",[a._v("Según vamos trabajando y creando archivos llegará un punto en el que no sabremos que archivos tenemos en nuestro "),o("strong",[a._v("staging area")]),a._v(" y para eso hemos de usar el comando:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git status -s")])])]),a._v(" "),o("p",[o("img",{attrs:{src:"/img/status.jpg",alt:"Git tatus -s"}})]),a._v(" "),o("p",[a._v("De este modo veremos que archivos hemos modificado ("),o("strong",[a._v("M")]),a._v("), borrado ("),o("strong",[a._v("D")]),a._v(") o sin seguimiento ("),o("strong",[a._v("??")]),a._v(").")]),a._v(" "),o("p",[a._v("En el momento que añadimos todo al staging area ("),o("code",[a._v("git add .")]),a._v(") veremos como los "),o("em",[a._v("flags")]),a._v(" han cambiado y nos avisa de que ya estan añadidos.")]),a._v(" "),o("p",[o("img",{attrs:{src:"/img/status-add.jpg",alt:"Git tatus -s"}})]),a._v(" "),o("p",[a._v("En este pantallazo vemos como se han añadido ("),o("strong",[a._v("A")]),a._v("), modificados ("),o("strong",[a._v("M")]),a._v(") o renombrados ("),o("strong",[a._v("R")]),a._v(").")]),a._v(" "),o("h2",{attrs:{id:"git-commit-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-2"}},[a._v("#")]),a._v(" Git commit")]),a._v(" "),o("p",[a._v("Para pasar nuestra "),o("strong",[a._v("staging area")]),a._v(" a nuestro "),o("strong",[a._v("repository")]),a._v(" hemos de usar:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v('git commit -m "nombre descriptivo de la subida"')])])]),a._v(" "),o("p",[o("img",{attrs:{src:"/img/commit.jpg",alt:"Git tatus -s"}})]),a._v(" "),o("h2",{attrs:{id:"loguearse"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loguearse"}},[a._v("#")]),a._v(" Loguearse")]),a._v(" "),o("p",[a._v("El logueo es simplemente un proceso para ver quien es el que ha hecho cambios. No hay que crear una cuenta previamente, simplemente usar estos dos comandos para poner nuestro nombre y nuestro email. "),o("strong",[a._v("Este proceso hay que hacerlo en cada ordenador que trabajemos")]),a._v(".")]),a._v(" "),o("ul",[o("li",[o("code",[a._v('git config --global user.name "nombrededeusuario"')])])]),a._v(" "),o("p",[a._v("Decimos cual es nuestro nombre de usuario en "),o("strong",[a._v("esta maquina")]),a._v(".")]),a._v(" "),o("ul",[o("li",[o("code",[a._v('git config --global user.email "emaildedeusuario"')])])]),a._v(" "),o("p",[a._v("Decimos cual es nuestro nombre de usuario en "),o("strong",[a._v("esta maquina")]),a._v(".")]),a._v(" "),o("h2",{attrs:{id:"clonar-repositorio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clonar-repositorio"}},[a._v("#")]),a._v(" Clonar repositorio")]),a._v(" "),o("ul",[o("li",[o("code",[a._v('git clone "https://github.com/nombreproyecto.git"')])])]),a._v(" "),o("h2",{attrs:{id:"revertir-cambios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#revertir-cambios"}},[a._v("#")]),a._v(" Revertir cambios")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git checkout -- <nombre archivo>")])])]),a._v(" "),o("h2",{attrs:{id:"comprobar-estado-actual-de-la-rama-sin-commit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comprobar-estado-actual-de-la-rama-sin-commit"}},[a._v("#")]),a._v(" Comprobar estado actual de la rama sin commit")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git status")])])]),a._v(" "),o("h2",{attrs:{id:"crear-rama-branch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#crear-rama-branch"}},[a._v("#")]),a._v(" Crear rama (branch)")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git branch -M <nombrederama>")])])]),a._v(" "),o("h2",{attrs:{id:"cambiar-de-rama"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cambiar-de-rama"}},[a._v("#")]),a._v(" cambiar de rama")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git checkout <nombrederama>")])])]),a._v(" "),o("hr"),a._v(" "),o("ul",[o("li",[o("code",[a._v("git fetch")])])]),a._v(" "),o("p",[a._v("Descarga los cambios realizados en el repositorio remoto.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git merge <nombre_rama>")])])]),a._v(" "),o("p",[a._v("Impacta en la rama en la que te encuentras parado, los cambios realizados en la rama “nombre_rama”.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git pull")])])]),a._v(" "),o("p",[a._v("Unifica los comandos fetch y merge en un único comando.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git push origin <nombre_rama>")])])]),a._v(" "),o("p",[a._v("Sube la rama “nombre_rama” al servidor remoto.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git checkout -b <nombre_rama_nueva>")])])]),a._v(" "),o("p",[a._v("Crea una rama a partir de la que te encuentres parado con el nombre “nombre_rama_nueva”, y luego salta sobre la rama nueva, por lo que quedas parado en esta última.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git checkout -t origin/<nombre_rama>")])])]),a._v(" "),o("p",[a._v("Si existe una rama remota de nombre “nombre_rama”, al ejecutar este comando se crea una rama local con el nombre “nombre_rama” para hacer un seguimiento de la rama remota con el mismo nombre.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git branch")])])]),a._v(" "),o("p",[a._v("Lista todas las ramas locales.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git branch -a")])])]),a._v(" "),o("p",[a._v("Lista todas las ramas locales y remotas.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git branch -d <nombre_rama>")])])]),a._v(" "),o("p",[a._v("Elimina la rama local con el nombre “nombre_rama”.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git push origin <nombre_rama>")])])]),a._v(" "),o("p",[a._v("Commitea los cambios desde el branch local origin al branch “nombre_rama”.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git remote prune origin")])])]),a._v(" "),o("p",[a._v("Actualiza tu repositorio remoto en caso que algún otro desarrollador haya eliminado alguna rama remota.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git reset --hard HEAD")])])]),a._v(" "),o("p",[a._v("Elimina los cambios realizados que aún no se hayan hecho commit.")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("git revert <hash_commit>")])])]),a._v(" "),o("p",[a._v("Revierte el commit realizado, identificado por el “hash_commit”.")])])}),[],!1,null,null,null);e.default=s.exports}}]);
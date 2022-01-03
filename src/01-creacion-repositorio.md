
# 01 Creación de repositorios

## Loguearse
La primera vez que usamos git en una maquina hemos de loguearnos poniendo un nombre y un email. El logueo es simplemente un proceso para ver quien es el que ha hecho cambios. No hay que crear una cuenta previamente, simplemente usar estos dos comandos para poner nuestro nombre y nuestro email. **Este proceso hay que hacerlo en cada ordenador que trabajemos**.

Para saber si estamos logueados podemos usar los comandos:
* ```git config user.name ``` y  ```git config user.email ```

![git config user.name y git config user.email](assets/img/username.jpg)


Si recibimos datos es que ya estamos logueados, en caso contrario tendremos que usar los comandos de logueo:
* ``` git config --global user.name "nombrededeusuario" ```

Decimos cual es nuestro nombre de usuario en **esta maquina**.

* ``` git config --global user.email "emaildedeusuario" ```

Decimos cual es nuestro nombre de usuario en **esta maquina**.


## Git init
El primer paso para la creación de un repositiorio git es mediante el comando:
* ``` git init ```

Esto creará una carpeta oculta llamada *.git* en la cual se guardará toda la información del proyecto. Este comando solo se ejecutará una vez en nuestro proyecto, ya que una vez usado ya habrá creado esa carpeta *.git* y no habrá que volver a usarlo en ese ordenador para ese proyecto.

Este comando creará dos areas en nuestro proyecto, una de estas areas es la llamada **Staging area** o area de ensayo y el otro area es el **repository local**. Aunque todo esto se hará de manera transparente a nosotros, ya que nosotros seguiremos trabajando en nuestro **directorio de trabajo** (**working directory**).


El **staging area** es el area donde hacemos un seguimiento de los archivos hayamos seleccionado (**add**). Este area del **repository local** o **staging area** es el lugar donde se han mandado todos los cambios (**commit**).

En resumidas cuentas nosotros trabajamos en nuestro **working directory** y cuando hacemos cambios podemos pasar esos archivos a nuestro **staging area** y una vez hechas todas las modificaciones pasar todos esos cambios a nuestro **repository local** el cual creará un punto de versión al que podremos acceder en cualquier momento para revisarlo.

![Areas de trabajo](assets/img/areas-trabajo-init.png)

## Git add
Mientras trabajamos en nuestra carpeta local y una vez que hemos modificado, borrado, o creado archivos tenemos que decirle a git que pase esos archivos al staging area y eso se consigue con:
* ``` git add <nombre_archivo> ```

Una vez ejecutado este comando, git hace un seguimiento de este archivo (y no de los que no se hayan añadido) ya que se encuentra en el staging area. Todo este proceso lo hace de manera transparente a nosotros, ya que nosotros seguimos viendo nuestra carpeta local, pero internamente ese archivo, al estar en el staging area, estará continuamente siendo revisado en cada cambio que hagamos.

Si por otro lado hemos modificado/creado/borrado muchos archivos, en vez de ir haciendo *add* de cada uno, podemos pasar todos al staging area con:
* ``` git add . ```

## Git commit
una vez tengamos todos nuestros archivos en nuestra stagging area, para pasarlos a nuestro repositorio local hay que ejecutar el comando:
* ``` git commit -m "nombre descriptivo de la subida" ```

De este modo hemos creado una "*instantanea*" o respaldo de nuestro trabajo hasta ese momento y nuestro stagin area quedará vacio ya que todo se ha pasado al repositorio local. De este modo acabamos de crear un punto de respaldo, al que podremos acceder más adelante mediante un ID que se le ha asignado. Cada commit no machaca el anterior, simplemente crea nuevos puntos cada uno con su propio ID.

![Areas de trabajo](assets/img/areas-trabajo-init.png)

## Git status
Según vamos trabajando y creando archivos llegará un punto en el que no sabremos que archivos tenemos en nuestro **staging area** y para eso hemos de usar el comando:
* ``` git status -s ```

![Git tatus -s](assets/img/status.jpg)

De este modo veremos que archivos hemos modificado (**M**), borrado (**D**) o sin seguimiento (**??**).

En el momento que añadimos todo al staging area (``` git add . ```) veremos como los *flags* han cambiado y nos avisa de que ya estan añadidos.

![Git tatus -s](assets/img/status-add.jpg)

En este pantallazo vemos como se han añadido (**A**), modificados (**M**).

## Git commit
Para pasar nuestra **staging area** a nuestro **repository local** hemos de usar:
* ``` git commit -m "nombre descriptivo de la subida" ```

![Git tatus -s](assets/img/commit.jpg)


## Git log
Cada vez que hacemos un commit, este se guarda como un punto de creación dentro del **repository local**, el comando para ver todos los commit es:
* ``` git log --oneline ```

De este modo veremos un listado de todas nuestras copias en la cual veremos el id, la ramificación y la descripión del commit.
![Git tatus -s](assets/img/log.jpg)

## Git reset
Este comando nos vuelve a un punto anterior del repositorio

* ``` git reset --hard ID ```

<p style="color:#fff;background-color:red;font-weight:bold; padding:20px;">IMPORTANTE: USAR GIT RESET BORRA TODOS LOS COMMITS POSTERIORES QUE SE HAYAN HECHO DESPUES DEL QUE HEMOS VUELTO</p>
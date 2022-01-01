
# GIT

## Loguearse
El logueo es simplemente un proceso para ver quien es el que ha hecho cambios. No hay que crear una cuenta previamente, simplemente usar estos dos comandos para poner nuestro nombre y nuestro email. **Este proceso hay que hacerlo en cada ordenador que trabajemos**.


* ``` git config --global user.name "nombrededeusuario" ```

Decimos cual es nuestro nombre de usuario en **esta maquina**.

* ``` git config --global user.email "emaildedeusuario" ```

Decimos cual es nuestro nombre de usuario en **esta maquina**.

## Inicializar servidor GIT
* ``` git init ```

Esto crea un subdirectorio nuevo llamado .git, el cual contiene todos los archivos necesarios del repositorio – un esqueleto de un repositorio de Git. Todavía no hay nada en tu proyecto que esté bajo seguimiento.

## Añadir archivo/s al repositorio
* ``` git add <nombre_archivo> ```

Añade el archivo “nombre_archivo” al proyecto.

* ``` git add . ``` 

Añade TODOS los archivos del proyecto


## Subir repositorio
* ``` git commit -m "nombre de la subida" ``` 

De este modo subimos todos los cambios realizados y/o que esten añadidos (add). El nombre de la subida es una descripción de lo que se ha hecho para poder acceder o consultar en un futuro.

## Clonar repositorio
* ``` git clone "https://github.com/nombreproyecto.git" ``` 


## Revertir cambios
* ``` git checkout -- <nombre archivo>``` 

## Comprobar estado actual de la rama sin commit
* ``` git status``` 


## Crear rama (branch)
* ``` git branch -M <nombrederama> ```

## cambiar de rama
* ``` git checkout <nombrederama> ```
-----------------------------------------------------------------------------------------------------
* ``` git fetch ```

Descarga los cambios realizados en el repositorio remoto.

* ``` git merge <nombre_rama> ```

Impacta en la rama en la que te encuentras parado, los cambios realizados en la rama “nombre_rama”.


* ``` git pull ```

Unifica los comandos fetch y merge en un único comando.


* ``` git push origin <nombre_rama> ```

Sube la rama “nombre_rama” al servidor remoto.


* ``` git checkout -b <nombre_rama_nueva> ```

Crea una rama a partir de la que te encuentres parado con el nombre “nombre_rama_nueva”, y luego salta sobre la rama nueva, por lo que quedas parado en esta última.

* ``` git checkout -t origin/<nombre_rama> ```

Si existe una rama remota de nombre “nombre_rama”, al ejecutar este comando se crea una rama local con el nombre “nombre_rama” para hacer un seguimiento de la rama remota con el mismo nombre.

* ``` git branch ```

Lista todas las ramas locales.

* ``` git branch -a ```

Lista todas las ramas locales y remotas.

* ``` git branch -d <nombre_rama> ```

Elimina la rama local con el nombre “nombre_rama”.

* ``` git push origin <nombre_rama> ```

Commitea los cambios desde el branch local origin al branch “nombre_rama”.

* ``` git remote prune origin ```

Actualiza tu repositorio remoto en caso que algún otro desarrollador haya eliminado alguna rama remota.

* ``` git reset --hard HEAD ```

Elimina los cambios realizados que aún no se hayan hecho commit.

* ``` git revert <hash_commit> ```

Revierte el commit realizado, identificado por el “hash_commit”.
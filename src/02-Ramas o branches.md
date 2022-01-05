
# 02 Ramas o Branches

## Qué son las ramas
Las ramas (**branches**) son como *lineas temporales* por la cuales podemos movernos a *lineas alternativas* para trabajar.

### Rama principal (Main)
Por defecto Git crea una rama llamada master (main en las versiones modernas) que es en la cual trabajamos y hacemos nuestros **Commits**.

![Rama/ranch Master](assets/img/rama_master.jpg)

### Ramas ejemplo
Su uso principal es la de crear distintas ramas para cada miembro de un equipo. Por ejemplo se puede crear una para maquetación/diseño, otra para componentes, programación, etc. Y cada persona trabajar en su rama sin interferir en el trabajo de los demas. Otro uso que se le puede dar es para hacer una prueba en ese momento mientras en la rama principal, o en otras, se sigue trabajando en el proyecto. Tambien podriamos usarlo para por ejemplo si estamos creando un manual (como es este el caso) que haya una persona haciendo la pagina 1, mientras otra persona hace la 2, otra la 3, etc.

![Ramas de distintos equipos](assets/img/ramas-ejemplos.jpeg)

### Union de ramas (merge)
Una vez finalizado el trabajo en esa rama se fusiona (**merge**) con la rama principal y así todos los cambios hechos en esas ramas estan disponibles en la rama maestra.

![Merge de ramas con rama principal](assets/img/ramas-ejemplos_merge.jpeg)

## Creación de Rama
Para crear una rama nueva se usa el comando:
* ```git branch nombrederama ``` 

Si hacemos un ``` git log --oneline ``` actualmente veremos que todos nuestros commits han sido realizado en la rama principal (master o main).
![git log en rama master o main](assets/img/rama_log-maestra.jpg)

Pero si creamos una rama nueva llamada *creacion_ramas* ```git branch creacion_ramas ```  y hacemos un ``` git log --oneline ``` veremos esa nueva rama:
![creacion rama "creacion_ramas"](assets/img/rama-creacion-rama.jpg)

Aunque veamos que se ha creado esa rama, hasta que no nos movamos a ella, los cambios seguirán siendo realizados en la rama master.

## Ver ramas creadas
Para ver las ramas que tenemos en nuestro proyecto debemos usar el comando:
* ```git branch ```

![ver listado ramas](assets/img/rama_ver-ramas.jpg)

El asterisco (y el color verde en VSC) muestra en que rama estamos actualmente (en el ejemplo la rama master), por lo que si hacemos cambios se haran en esa rama. Para poder hacer cambios en la rama *creacion_ramas*, primero debemos movernos a ella.

## Movernos entre ramas
Para movernos entre ramas se usa el comando **checkout** más el nombre de la rama a la que deseamos movernos:
* ```git checkout creacion_ramas ```

Si ahora hacemos un ```git branch ``` veremos que ya estamos en la rama *creacion_ramas* y que todos los cambios que hagamos, se haran **solo** en esa rama y la rama master se quedará como estaba.

![Cambio a rama creacion_ramas](assets/img/rama-cambio-rama.jpg)

Si hacemos cambios en esta rama y volvemos a la rama *master* ```git checkout master ```, hay que tener en cuenta que todos los cambios hechos en la rama *creacion_ramas* no aparecerán en la rama master, ya que de momento no se han fusionado (**merge**).
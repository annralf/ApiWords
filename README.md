# Prueba PHP FullStack BrandLive



## Inicio

La prueba consiste en maquetar en HTML el contenido del archivo .psd y adicionalmente crear un algoritmo capaz de identificar las posibles combinaciones de palabras de un string dado 

### Prerequisitos

Docker
1.- Si no esta instalado, el paso a paso se encuentra en el siguiente link: https://www.docker.com/get-started


### Instalación

2.- Desde la raiz del proyecto 
```
docker-compose up -d
```
3.- Verificar que el contenedor web esta arriba
```
docker-compose ps
```
El contenedor web debe estar corriendo perfectamente en la dirección http://localhost:8002
Dado que el contenedor PHP no ha levantado, ejecutar lo siguiente:
```
docker run -it brandlivetest_api-backend:latest -p 8002:8000 -v $PWD/api/.:/var/www/html/ php -S 0.0.0.0:8000 public/index.php 
```
Una vez inicializado el servicio, se podrá acceder 
* Vía request: http://localhost:8002/api?letters={string_a_examilar}&limit={cantidad_maxima_de_letras_a_conformar_nueva_palabra}&lang={idioma}
* Opciones de idioma:
    - en para ingles
    - es para español
    - en-es si desea ambos idiomas

* Acceso al componente Web:
  * [Herramienta para extracción de palabras](http://localhost:4202/word-srv)  
  * [Pufi Web Estructura](http://localhost:4202/page-test)  

## Authors

* **Ana Rafaela Güere** 

## Fecha

    03 de Abril 2020 
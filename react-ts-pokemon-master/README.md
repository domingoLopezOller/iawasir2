# Pokédex APP - Colección de Pokémon :space_invader:
## _UI con React.js consumiendo el API pública de Pokeapi.co_
![download](https://user-images.githubusercontent.com/96445737/212669378-a699e1ae-b9bf-4b54-a3af-14c78b673511.png)
***
## Visita la APP :eye:
[APP desplegada en Netlify](https://my-pokedex-react-typescript.netlify.app/)

***
## Tecnologías :zap:
- React
- TypeScript 
- Estilos con SASS
- Peticiones http con Axios

## Funcionalidad :star:

### :star: Vista en cuadrícula paginada de los Pokémon (CSS Grid)
![Screenshot from 2023-01-16 12-38-46](https://user-images.githubusercontent.com/96445737/212669990-e495bcee-5b2b-4cdb-8a5e-d666bc0379cb.png)

### :star: Vista en detalle con sus estadísticas
![Screenshot from 2023-01-16 12-34-00](https://user-images.githubusercontent.com/96445737/212670212-1d0cb9f1-f08f-40ad-a98c-6ceb1880ba06.png)

### :star: Filtrado por tipo de Pokémon
![por-tipo](https://user-images.githubusercontent.com/96445737/212670897-f8573cf2-69b7-45b9-9a95-c8bf92731991.png)
***
## Diseño de vista adaptable (Responsive) :left_right_arrow:
![Screenshot from 2023-01-16 12-53-36](https://user-images.githubusercontent.com/96445737/212672640-56aa3ec6-6d0a-4d61-a359-23e73d8273fc.png)

## Puntos a destacar de la aplicación :rocket:
### :rocket: El hook usePagination
#### Otorga funcionalidad a los botones de paginación, para adelante, atrás y a la primera página al hacer clic en el logo de Pokémon y además suaviza la subida del scroll a cada cambio de página
### :rocket: El contexto PokemonContext
#### La parte más importante de la aplicación, que la provee de estado global, haciendo una peticion get para recoger los tipos de Pokémon existentes
### :rocket: El archivo de tipos colorByPokemonType
#### Recorre los tipos de Pokémon y los vincula con su color
***

## Pruébala en local (o entra en la [web](https://my-pokedex-react-typescript.netlify.app/))
### 1. Descarga el repositorio

_Esquina superior derecha, botón verde Code, "Download ZIP"_


### 2. Abre una terminal que apunte a tu repositorio local e instala las dependencias
```sh
npm install
```
### 3. Ejecuta el comando para iniciar el entorno de desarrollo de Vite
```sh
npm run dev
```
### 4. Visita con el navegador la dirección de localhost con el puerto asignado por Vite
_Podrás ver el enlace en la terminal del punto anterior_
***

## Conocimientos adquiridos :bulb:
### :bulb: Mejorar el Context API en TypeScript
### :bulb: Reforzar los tipos de TypeScript
### :bulb: Usar Figma por primera vez
### :bulb: Practicar con SASS

## Fuentes :book:
### :book: [Youtube: Fernando Herrera](https://www.youtube.com/watch?v=8HE657KssxE)
### :book: Stack Overflow
### :book: Chat GPT

## Licencia de uso :newspaper_roll:
MIT

## Autor :man_technologist:
Fernando Valdivielso - @valdidev

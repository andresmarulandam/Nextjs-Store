## PROJECT NEXTJS

# Instalación

1.  Start a nextjs project: npx create-next-app@latest
2.  Limpiar page.tsx y dejar solo el <main>
3.  Eliminar page module y globals css

# Configuración de endpoints con Postman

1. Abrir en Postman--> settings--> Data --> Import Data file
2. Importar la coleccion y el environment dado por Platzi
3. Entrar al environment Future World
4. Crear una colección llamada Future World Graphql
5. En el endpoint colocar: {{SHOPIFY_HOSTNAME}}/api/2024-07/graphql.json (/api/2024-07/graphql.json) Esta parte se saca de la pagina web de shopify para devs https://shopify.dev/docs/api/storefront#endpoints
6. En los headers agregar: X-Shopify-Storefront-Access-Token y el valor será el ya dado por Platzi: {{SHOPIFY_STOREFRONT_TOKEN}}
7. Hacer la query como lo dice la pagina de Shopify: query{
   products(first: 3) {
   edges {
   node {
   id
   title
   }}}}

## RUTAS EN NETXJS:

# Existen las rutas estaticas y las rutas dinamicas:

# ESTATICAS: Ruta ya definida en el proyecto, se crea la carpeta y dentro un archivo llamado page.tsx

# DINAMICAS: Van a ir cambiando o pueden venir de una Api. Se crea la carpeta pero dentro de corchetes [category] y dentro page.tsx

1. En src/app crear la carpeta llamada store y dentro page.tsx
2. En src/app crear la carpeta dentro de corchetes category y dentro page.tsx

## LAYOUT

1. Se puede cambiar el titulo en layout.tsx
2. Todo elemento que se agregue al layout.tsx de la raiz aparecerá en toda la aplicación
3. También puedes crear layout a nivel carpeta

## NAVEGATION

# La navegación se maneja con el componente Link que nos trae nextjs.

1. En el layout de src/app: <ul>
   <Link href="/">
   <li>Home</li>
   </Link>
   <Link href="/store">
   <li>Store</li>
   </Link>
   </ul>

## Manejo de parámetros en rutas en Next.js SEGMENTOS DINAMICOS

# Cuando por ejemplo cuando se necesita anidar muchas cosas:

localhost:3000/store/tecnology/mobile/iphone/iphone15/white

1. Se maneja colocandole tres puntos antes del nombre: [...categories]

2. Pero si quiero que ese segmento también maneje la generalidad de store se colcoa dentro de doble corchete: [[...categories]]

3. Si queremos manejar los searchparams por ejemplo:
   localhost:3000/store/tecnology/mobile/iphone/iphone15/white?socialmedia=twitter
   Se coloca en la interface de page.tsx:
   searchParams?: string;

## CLIENT COMPONENT Y SERVER COMPONENT

# "use client": dinamicos, useEffect, animación, llamados a API

# server component: Presentacionales, solo presentan información

## ESTRUCTURA:

1. Crear carpeta components y dentro una carpeta llamada shared donde irán las carpetas de todos los componentes reutilizables como botones, header y demas.
2. Crear dentro de shared y carpeta llamada Header y crear el componente Header.
3. Dentro de componentes crear otra carpeta llamada Home, que serán los componentes usados en la pagina de Home.

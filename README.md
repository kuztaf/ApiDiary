# ApiDiary

Este proyecto es una API RESTful desarrollada con Node.js, Express y TypeScript para gestionar un diario personal. Permite crear, leer, actualizar y eliminar entradas de diario de manera segura y eficiente.

## Características

- CRUD de entradas de diario (Create, Read, Update, Delete)
- Estructura modular con TypeScript
- Persistencia de datos en archivos JSON
- Separación de rutas, servicios y utilidades
- Buenas prácticas de desarrollo

## Estructura del proyecto

```
api_express_ts/
├── src/
│   ├── data/           # Archivos de datos (diaries.json)
│   ├── routes/         # Definición de rutas Express
│   ├── services/       # Lógica de negocio y servicios
│   ├── types/          # Tipos TypeScript
│   ├── utils/          # Funciones utilitarias
│   ├── diaries.ts      # Controlador principal de diarios
│   └── index.ts        # Punto de entrada de la app
├── build/              # Archivos compilados
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración TypeScript
├── .gitignore          # Exclusiones de Git
└── README.md           # Documentación
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone git@github.com:kuztaf/ApiDiary.git
   cd api_express_ts
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Compila el proyecto:
   ```sh
   npm run build
   ```
4. Inicia el servidor:
   ```sh
   npm start
   ```

## Uso

La API expone endpoints para manejar entradas de diario. Ejemplo de endpoints:

- `GET /diaries` — Listar todas las entradas
- `POST /diaries` — Crear una nueva entrada
- `GET /diaries/:id` — Obtener una entrada específica
- `PUT /diaries/:id` — Actualizar una entrada
- `DELETE /diaries/:id` — Eliminar una entrada

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

MIT

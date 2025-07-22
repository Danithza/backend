import router from '@adonisjs/core/services/router'

// UsersController
const UsersController = () => import('#controllers/users_controller')
router.get('/users', [UsersController, 'index'])
router.post('/users', [UsersController, 'store'])
router.get('/users/:id', [UsersController, 'show'])
router.put('/users/:id', [UsersController, 'update'])
router.delete('/users/:id', [UsersController, 'destroy'])

// UsersController

// Login con contraseña en texto plano
router.post('/login', [UsersController, 'login'])

// Crear usuario (registro)
router.post('/register', [UsersController, 'store'])

// Obtener el usuario actual (opcional, puedes eliminarlo si no se usa)
router.get('/me', [UsersController, 'index']) // O reemplazar por show si tienes auth más adelante

// TablasController
const TablasController = () => import('#controllers/tablas_controller')
router.get('/tablas', [TablasController, 'index'])
router.post('/tablas', [TablasController, 'store'])
router.get('/tablas/:id', [TablasController, 'show'])
router.put('/tablas/:id', [TablasController, 'update'])
router.delete('/tablas/:id', [TablasController, 'destroy'])

// ColumnasController
const ColumnasController = () => import('#controllers/columnas_controller')
router.get('/columnas', [ColumnasController, 'index'])
router.post('/columnas', [ColumnasController, 'store'])
router.get('/columnas/:id', [ColumnasController, 'show'])
router.put('/columnas/:id', [ColumnasController, 'update'])
router.delete('/columnas/:id', [ColumnasController, 'destroy'])

// RegistrosController
const RegistrosController = () => import('#controllers/registros_controller')
router.get('/registros', [RegistrosController, 'index'])
router.post('/registros', [RegistrosController, 'store'])
router.get('/registros/:id', [RegistrosController, 'show'])
router.put('/registros/:id', [RegistrosController, 'update'])
router.delete('/registros/:id', [RegistrosController, 'destroy'])

// CambiosController
const CambiosController = () => import('#controllers/cambios_controller')
router.get('/cambios', [CambiosController, 'index'])
router.post('/cambios', [CambiosController, 'store'])
router.get('/cambios/:id', [CambiosController, 'show'])
router.put('/cambios/:id', [CambiosController, 'update'])
router.delete('/cambios/:id', [CambiosController, 'destroy'])

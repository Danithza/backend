import type { HttpContext } from '@adonisjs/core/http'
import Registro from '#models/registro'

export default class RegistrosController {
  /**
   * Obtener todos los registros
   */
  async index({ response }: HttpContext) {
    const registros = await Registro.all()
    return response.ok(registros)
  }

  /**
   * Crear un nuevo registro
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['tabla_id', 'contenido', 'usuario_id'])
    const nuevo = await Registro.create(data)
    return response.created(nuevo)
  }

  /**
   * Mostrar un registro específico por ID
   */
  async show({ params, response }: HttpContext) {
    const registro = await Registro.find(params.id)
    if (!registro) {
      return response.notFound({ mensaje: 'Registro no encontrado' })
    }
    return response.ok(registro)
  }

  /**
   * Actualizar un registro por ID
   */
  async update({ params, request, response }: HttpContext) {
    const registro = await Registro.find(params.id)
    if (!registro) {
      return response.notFound({ mensaje: 'Registro no encontrado' })
    }

    const data = request.only(['tabla_id', 'contenido', 'usuario_id'])
    registro.merge(data)
    await registro.save()

    return response.ok(registro)
  }

  /**
   * Eliminar un registro por ID
   */
  async destroy({ params, response }: HttpContext) {
    const registro = await Registro.find(params.id)
    if (!registro) {
      return response.notFound({ mensaje: 'Registro no encontrado' })
    }

    await registro.delete()
    return response.ok({ mensaje: 'Registro eliminado correctamente' })
  }
}

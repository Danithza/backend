import type { HttpContext } from '@adonisjs/core/http'
import Tabla from '#models/tabla'

export default class TablasController {
  /**
   * Listar todas las tablas
   */
  async index({ response }: HttpContext) {
    try {
      const tablas = await Tabla.all()
      return response.ok(tablas)
    } catch (error) {
      return response.internalServerError({ message: 'Error al obtener las tablas', error })
    }
  }

  /**
   * Crear una nueva tabla
   */
  async store({ request, response }: HttpContext) {
    try {
      const datos = request.only(['nombreTabla', 'estructura'])
      const tabla = await Tabla.create(datos)
      return response.created(tabla)
    } catch (error) {
      return response.internalServerError({ message: 'Error al crear la tabla', error })
    }
  }

  /**
   * Mostrar una tabla por ID
   */
  async show({ params, response }: HttpContext) {
    try {
      const tabla = await Tabla.findOrFail(params.id)
      return response.ok(tabla)
    } catch (error) {
      return response.notFound({ message: 'Tabla no encontrada' })
    }
  }

  /**
   * Actualizar una tabla
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const tabla = await Tabla.findOrFail(params.id)
      const datos = request.only(['nombreTabla', 'estructura'])

      tabla.merge(datos)
      await tabla.save()

      return response.ok(tabla)
    } catch (error) {
      return response.internalServerError({ message: 'Error al actualizar la tabla', error })
    }
  }

  /**
   * Eliminar una tabla
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const tabla = await Tabla.findOrFail(params.id)
      await tabla.delete()
      return response.ok({ message: 'Tabla eliminada correctamente' })
    } catch (error) {
      return response.internalServerError({ message: 'Error al eliminar la tabla', error })
    }
  }
}

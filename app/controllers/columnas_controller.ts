import type { HttpContext } from '@adonisjs/core/http'
import Columna from '#models/columna'

export default class ColumnasController {
  async index() {
    return await Columna.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['tabla_id', 'campo', 'tipo', 'requerido'])
    return await Columna.create(data)
  }

  async show({ params }: HttpContext) {
    return await Columna.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const columna = await Columna.findOrFail(params.id)
    const data = request.only(['campo', 'tipo', 'requerido'])
    columna.merge(data)
    await columna.save()
    return columna
  }

  async destroy({ params }: HttpContext) {
    const columna = await Columna.findOrFail(params.id)
    await columna.delete()
    return { mensaje: 'Columna eliminada' }
  }
}

import type { HttpContext } from '@adonisjs/core/http'
import Cambio from '#models/cambio'

export default class CambiosController {
  async index() {
    return await Cambio.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['registroId', 'usuarioId', 'tipoCambio', 'cambios'])
    return await Cambio.create(data)
  }

  async show({ params }: HttpContext) {
    return await Cambio.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const cambio = await Cambio.findOrFail(params.id)
    const data = request.only(['registroId', 'usuarioId', 'tipoCambio', 'cambios'])
    cambio.merge(data)
    await cambio.save()
    return cambio
  }

  async destroy({ params }: HttpContext) {
    const cambio = await Cambio.findOrFail(params.id)
    await cambio.delete()
    return { mensaje: 'Cambio eliminado' }
  }
}

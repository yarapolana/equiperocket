import { Router } from express

const routes = new Router() //acho que é isso

routes.get('/', (req, res) => {
    return res.json({ Menssagen de exemplo: 'Olá adorei isso aqui ;)'})
})
export default routes;


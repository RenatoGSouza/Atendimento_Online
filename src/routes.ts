import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:333/settings/1
 * 
 * Query Params => Filtros e buscas
 * http://localhost:333/settings/1?search=algumaCoisa
 * 
 * Body params => {
 * 
 * }
 */

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

export { routes };
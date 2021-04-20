import { Request, Response } from "express";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingRepository = getCustomRepository(settingsRepository);
  
    const settings = settingRepository.create({
      chat,
      username
    });
    await settingRepository.save(settings);
  
    return response.json(settings);
  }
}

export { SettingsController };
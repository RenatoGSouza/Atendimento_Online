import { getCustomRepository } from "typeorm";
import { settingsRepository } from "../repositories/settingsRepository";


interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService{

  async create({ chat, username } : ISettingsCreate){
    const settingRepository = getCustomRepository(settingsRepository);
    //Select * from settings where username = 'username' limit 1;
    const userAlreadyExists = await settingRepository.findOne({ 
      username, 
    });
    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }
      const settings = settingRepository.create({
        chat,
        username
      });
      await settingRepository.save(settings);

      return settings;
  }
}

export { SettingsService }
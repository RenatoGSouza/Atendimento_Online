import { getCustomRepository, Repository } from "typeorm";
import { setting } from "../entities/setting";
import { settingsRepository } from "../repositories/settingsRepository";


interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService{
  private settingRepository: Repository<setting>;

  constructor() {
    this.settingRepository = getCustomRepository(settingsRepository);
  }

  async create({ chat, username } : ISettingsCreate){
    //Select * from settings where username = 'username' limit 1;
    const userAlreadyExists = await this.settingRepository.findOne({ 
      username, 
    });
    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }
      const settings = this.settingRepository.create({
        chat,
        username
      });
      await this.settingRepository.save(settings);

      return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingRepository.findOne({ username });
    return settings;
  }

  async update(username: string, chat: boolean) {
    await this.settingRepository
    .createQueryBuilder()
    .update(setting)
    .set({ chat })
    .where('username = :username', {
      username,
    })
    .execute();
  }

}

export { SettingsService }
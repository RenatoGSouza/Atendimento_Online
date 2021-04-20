import { EntityRepository, Repository } from "typeorm";
import { setting } from "../entities/setting";

@EntityRepository(setting)
class settingsRepository extends Repository<setting> {}

export { settingsRepository };
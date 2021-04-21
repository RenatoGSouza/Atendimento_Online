import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    // Verficar se o usuario existe
    const userExists = await usersRepository.findOne({ email });

    //Se existir, retornar user
    if (userExists) {
      return userExists;
    }

    // Se não existir, salvar no BD
    const user = usersRepository.create({ email });
    await usersRepository.save(user)
    return user;
  }
}

export { UsersService }
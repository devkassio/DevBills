/**
 * ! EXEMPLO DE ARQUIVO TYPESCRIPT COM TODAS AS CONFIGURAÇÕES
 * ? Este arquivo demonstra o uso de autocomplete, types, e boas práticas
 * todo Teste as funcionalidades de autocomplete aqui!
 * * Funcionalidades ativadas: Auto imports, Inlay hints, Error lens, etc.
 */

// Exemplo de interface com convenção de nomenclatura (prefixo I)
interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
}

// Exemplo de type alias
type UserRole = 'admin' | 'user' | 'guest';

// Exemplo de enum
enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}

// Exemplo de classe com todos os tipos
class UserService {
  private users: IUser[] = [];

  /**
   * Adiciona um novo usuário
   * @param user - Dados do usuário
   * @returns O usuário adicionado
   */
  public addUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }

  /**
   * Busca um usuário por ID
   * @param id - ID do usuário
   * @returns O usuário encontrado ou undefined
   */
  public findUserById(id: number): IUser | undefined {
    return this.users.find(user => user.id === id);
  }

  /**
   * Lista todos os usuários
   * @returns Array de usuários
   */
  public getAllUsers(): IUser[] {
    return this.users;
  }

  /**
   * Remove um usuário por ID
   * @param id - ID do usuário a ser removido
   * @returns true se removido, false caso contrário
   */
  public removeUser(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

// Exemplo de função async com tratamento de erros
async function fetchUserData(userId: number): Promise<IUser> {
  try {
    // Simula uma chamada de API (apenas exemplo)
    // Em produção, use bibliotecas como axios ou node-fetch
    const mockData: IUser = {
      id: userId,
      name: 'Usuário de Teste',
      email: 'teste@example.com',
      age: 25,
    };
    return mockData;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw new Error('Falha ao buscar dados do usuário');
  }
}

// Exemplo de arrow function com types
const greetUser = (user: IUser): string => {
  return `Olá, ${user.name}! Seu email é ${user.email}`;
};

// Exemplo de uso com destructuring
const displayUserInfo = ({ name, email, age }: IUser): void => {
  // ! Em produção, use um logger adequado ao invés de console.log
  console.log(`Nome: ${name}`);
  console.log(`Email: ${email}`);
  if (age !== undefined) {
    console.log(`Idade: ${age}`);
  }
};

// Exemplo de generic function
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// Exemplo de uso do código
const userService = new UserService();

const newUser: IUser = {
  id: 1,
  name: 'João Silva',
  email: 'joao@example.com',
  age: 30,
};

userService.addUser(newUser);
const foundUser = userService.findUserById(1);

if (foundUser !== undefined) {
  console.log(greetUser(foundUser));
  displayUserInfo(foundUser);
}

// Exemplo de uso de generic
const _numbers = [1, 2, 3, 4, 5];
const _firstNumber = getFirstElement(_numbers);

const _users = userService.getAllUsers();
const _firstUser = getFirstElement(_users);

// Exemplo de Promise com async/await
const loadUser = async (): Promise<void> => {
  try {
    const user = await fetchUserData(1);
    console.log('Usuário carregado:', user);
  } catch (error) {
    console.error('Erro:', error);
  }
};

// * Executa a função de exemplo
void loadUser();

// Export para uso em outros módulos
export { displayUserInfo, greetUser, UserService };
export type { IUser, UserRole, UserStatus };

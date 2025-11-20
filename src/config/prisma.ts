import { PrismaClient } from "../../generated/prisma/index.js";
import { config } from "../config/database.config.js";

const prisma = new PrismaClient(config);

export const prismaConnect = async () => {
  try {
    await prisma.$connect();
console.log("✅ PostgreSql conectado com sucesso!")
  } catch (err) {
console.error("🚨 Falha ao conectar com o PostgreSql")
  }
}
export default prisma;

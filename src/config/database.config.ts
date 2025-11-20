import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import type { Prisma } from '../../generated/prisma/index.js';

// String de conexão do banco
const connectionString = process.env.DATABASE_URL || 'postgresql://usuario:senha@localhost:5432/devbills';

// Criar pool de conexões PostgreSQL
const pool = new Pool({ connectionString });

// Criar adapter para Prisma
const adapter = new PrismaPg(pool);

// Configuração para o PrismaClient v7
export const config: Prisma.PrismaClientOptions = {
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  errorFormat: 'pretty',
};

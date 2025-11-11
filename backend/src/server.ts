import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const { PORT, HOST } = process.env;

async function startServer(): Promise<void> {
  try {
    await app.listen({ port: PORT, host: HOST });
    console.log('🚀 Estamos online!');
    console.log(`📡 O HTTP do servidor está rodando: http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
}

void startServer();

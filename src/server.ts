import { prismaConnect } from '@/config/prisma.js';
import { initializeGlobalCategories } from '@/services/globalCategories.service.js';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ quiet: true });

const PORT = Number(process.env['PORT']);
const HOST = process.env['HOST'];

const startServer = async () => {
  try {
    await prismaConnect();
    await initializeGlobalCategories();

    await app.listen({ port: PORT}).then(() => {
      console.log(` O servidor está rodando 📡: http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
}

startServer();

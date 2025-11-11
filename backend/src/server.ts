import app from './app.js';

const PORT = Number(process.env['PORT']) || 3001;
const HOST = process.env['HOST'] || '0.0.0.0';

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

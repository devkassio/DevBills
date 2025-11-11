import type { FastifyInstance } from "fastify";

async function routes(fastify: FastifyInstance) {
	fastify.get("/health", async () => {
		return {
			status: "ok",
			timestamp: new Date().toISOString(),
			message: "DevBills API RODANDO!",
		};
	});
}
export default routes;

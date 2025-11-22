import { getCategories } from '@/controllers/category.controller.js';
import type { FastifyInstance } from 'fastify';

const categoryRoutes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', getCategories);
};
export default categoryRoutes;

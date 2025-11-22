import prisma from '@/config/prisma.js';
import type { FastifyReply, FastifyRequest } from 'fastify';

export const getCategories = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    reply.send(categories);
  } catch (error) {
    request.log.error({ error }, 'Error ao buscar as categorias');
    reply.status(500).send({ error: 'Error ao buscar categorias' });
  }
};

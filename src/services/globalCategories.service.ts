import prisma from '@/config/prisma.js';
import type { Category } from '../../generated/prisma/index.js';
import { TransactionType } from '../../generated/prisma/index.js';

type GlobalCategoryInput = Pick<Category, 'name' | 'color' | 'type'>;

const globalCategories: GlobalCategoryInput[] = [
  // Despesas
  { name: 'Alimentação', color: '#FF5733', type: TransactionType.EXPENSE },
  { name: 'Transporte', color: '#33A8FF', type: TransactionType.EXPENSE },
  { name: 'Moradia', color: '#33FF57', type: TransactionType.EXPENSE },
  { name: 'Saúde', color: '#F033FF', type: TransactionType.EXPENSE },
  { name: 'Educação', color: '#FF3366', type: TransactionType.EXPENSE },
  { name: 'Lazer', color: '#FFBA33', type: TransactionType.EXPENSE },
  { name: 'Compras', color: '#33FFF6', type: TransactionType.EXPENSE },
  { name: 'Outros', color: '#B033FF', type: TransactionType.EXPENSE },

  // Receitas
  { name: 'Salário', color: '#33FF57', type: TransactionType.INCOME },
  { name: 'Freelance', color: '#33A8FF', type: TransactionType.INCOME },
  { name: 'Investimentos', color: '#FFBA33', type: TransactionType.INCOME },
  { name: 'Outros', color: '#B033FF', type: TransactionType.INCOME },
];

export const initializeGlobalCategories = async (): Promise<Category[]> => {
  const createdCategories: Category[] = [];

  for (const category of globalCategories) {
    try {
      const existing = await prisma.category.findFirst({
        where: {
          name: category.name,
          type: category.type,
        },
      });
      if (!existing) {
        const created = await prisma.category.create({
          data: category,
        });
        console.log(`✅ Criada: ${created.name}`);
        createdCategories.push(created);
      } else {
        createdCategories.push(existing);
      }
    } catch (error) {
      console.error('❌ Error creating global categories:', error);
    }
  }
    console.log('🚀 Todas as categorias foram criadas!');

  return createdCategories;
};

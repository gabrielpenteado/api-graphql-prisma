import { Resolvers } from "@/generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    products: async (parent, args, context) => {
      const productsArray = await context.prisma.product.findMany();
      return productsArray;
    },
  },
};

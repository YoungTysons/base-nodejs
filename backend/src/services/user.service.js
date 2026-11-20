import prisma from '../config/prisma.js';

export class UserService {
  async findAll() {
    return prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
    });
  }

  async findById(id) {
    return prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, createdAt: true },
    });
  }

  async update(id, data) {
    const { password, ...safeData } = data;
    return prisma.user.update({
      where: { id },
      data: safeData,
      select: { id: true, name: true, email: true, updatedAt: true },
    });
  }

  async delete(id) {
    return prisma.user.delete({ where: { id } });
  }
}

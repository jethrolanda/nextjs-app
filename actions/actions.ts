"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  await prisma.task.create({
    data: {
      title: formData.get("title") as string
    }
  });

  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  await prisma.task.delete({
    where: {
      id
    }
  });

  revalidatePath("/");
}

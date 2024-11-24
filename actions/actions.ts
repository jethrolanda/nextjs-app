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
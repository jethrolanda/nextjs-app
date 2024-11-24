"use client";
import { TTodo } from "@/types";
export default function Todo({
  todo,
  deleteTodo
}: {
  todo: TTodo;
  deleteTodo: (id: string) => Promise<void>;
}) {
  return (
    <li className="flex justify-between">
      {todo?.title}

      <span
        onClick={() => deleteTodo(todo?.id)}
        className="text-sm text-red-700 font-medium cursor-pointer"
      >
        Delete
      </span>
    </li>
  );
}

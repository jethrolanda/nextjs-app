import { addTodo } from "@/actions/actions";
import prisma from "@/lib/db";

export default async function Home() {
  const todos = await prisma.task.findMany();

  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-slate-200 text-xl">
      <div className="shadow-md rounded-md flex flex-col p-10 bg-white gap-4">
        <h4 className="font-bold">Todo List:</h4>
        <ul>
          {todos.map((todo, key) => (
            <li key={key}>{todo?.title}</li>
          ))}
        </ul>
        <form action={addTodo} className="flex flex-col gap-4">
          <input type="text" name="title" className="border rounded-md p-2" />
          <button
            type="submit"
            className="border bg-blue-900 color text-white p-2 rounded-md text-sm font-semibold uppercase"
          >
            Add todo
          </button>
        </form>
      </div>
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
}

const useTodo = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data),
  });
};

export default useTodo;

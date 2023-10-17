
export async function logMovies() {
  const response = await fetch("http://127.0.0.1:3000/task");
  const tasks = await response.json();
  return tasks;
}

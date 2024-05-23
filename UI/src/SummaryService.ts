import { TaskResult } from "./AssesmentService";

//this service is correct
//you don't need to touch it

function basicHash(input: string): string {
  let hash = 0;
  if (input.length === 0) return "00000000";
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return ("00000000" + hash.toString(16)).slice(-4);
}

export const CreateSummary = (tasks: TaskResult[]) => {
  let totalSummary = tasks.map((x) => basicHash(x.Key)).join("");
  return totalSummary;
};

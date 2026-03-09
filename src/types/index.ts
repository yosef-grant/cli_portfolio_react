export type ValidInput = "about" | "help" | "contact" | "clear";
export type Page = Exclude<ValidInput, "help" | "clear">;

export type Language = "en" | "es";

export type ParamsWithLanguage<T extends object = object> = {
  locale: Language;
} & T;
import { createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { defaultNS, getOptions } from "./settings";
import { OptionType } from "@/shared/types";

type UseTranslationOptions = {
  keyPrefix?: string;
};

export type CustomTFunction = (key: string, options?: OptionType) => string;

type UseTranslationReturn = {
  t: CustomTFunction;
  i18n: i18n;
};

const initI18next = async (
  lng: string,
  ns: string = defaultNS
): Promise<i18n> => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: string,
  ns?: string,
  options: UseTranslationOptions = {}
): Promise<UseTranslationReturn> {
  const i18nextInstance = await initI18next(lng, ns);

  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}

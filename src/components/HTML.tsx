"use client";
import { JSX, memo } from "react";
import { dir } from "i18next";

import useLocale from "@/hooks/useLocale";

type Props = React.HTMLAttributes<HTMLHtmlElement>

const HTML = memo(function HTML(props: Props): JSX.Element {
  const locale = useLocale();
  return <html lang={locale} dir={dir(locale)} {...props} />;
});

export default HTML;
export type { Props as HTMLProps };
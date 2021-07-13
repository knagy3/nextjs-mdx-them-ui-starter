import { useEffect, useState } from "react"
import { Box, useColorMode } from "theme-ui"
import { useRouter } from 'next/router';

import Button from "./Button"
import useTranslation from '../hooks/useTranslation';

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  const { setLocale, locales } = useTranslation();
  const router = useRouter();

  function handleLocaleChange(language) {
    if (!window) {
      return;
    }

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    router.push(router.pathname, router.asPath.replace(regex, `/${language}`));
  };

  return (
    <Box
      sx={{
        p: 3,
        position: "absolute",
        top: 0,
        right: 0,
        opacity,
        transition: "opacity .25s ease-in-out",
      }}
    >
      <div className="lang">
        {locales.map((locale) => (
          <button key={locale} onClick={() => handleLocaleChange(locale)}>
            {locale}
          </button>
        ))}
      </div>
      <Button
        sx={{ bg: "gray", py: 1, px: 2, fontSize: 0 }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        switch to {colorMode === "default" ? "dark" : "light"} mode
      </Button>
    </Box>
  )
}

export default ThemeToggle

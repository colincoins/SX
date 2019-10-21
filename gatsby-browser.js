/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import customTheme from './src/components/theme';

export const wrapRootElement = (
  { element },
  { isResettingCSS = true, isUsingColorMode = true },
) => (
  <ThemeProvider theme={customTheme}>
    {isResettingCSS && !isUsingColorMode && <CSSReset />}
    {isUsingColorMode ? (
      <ColorModeProvider>
        {isResettingCSS && <CSSReset />}
        {element}
      </ColorModeProvider>
    ) : (
      element
    )}
  </ThemeProvider>
);
import React from 'react';
import { Heading, Box, IconButton, useColorMode } from '@chakra-ui/core';

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pos="sticky"
      as="header"
      top="0"
      left="0"
      right="0"
      borderBottom="solid 1px gray"
      padding="4"
      alignContent="center"
      bg={bg[colorMode]}
      {...props}
    >
      <Heading as="h2" size="md" fontWeight="semibold">SpaceX</Heading>
      <Box>
        <IconButton
              aria-label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? "moon" : "sun"}
            />
      </Box>
    </Box>
  )
}

export default Header;
import React from 'react';
import { Heading, Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, useColorMode } from '@chakra-ui/core';

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "#1A202C" };
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
      borderBottom="solid 1px #1A202C"
      padding="4"
      alignContent="center"
      bg={bg[colorMode]}
      {...props}
    >
      <Heading as="h2" size="md" fontWeight="semibold">SpaceX</Heading>

      {/* <Menu>
        <MenuButton as={Button} rightIcon="chevron-down">
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu> */}

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
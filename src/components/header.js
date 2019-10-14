import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/core';

const Header = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Text>Home</Text>
      <Text>About</Text>
      <Text>Articles</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </Grid>
  )
}

export default Header;
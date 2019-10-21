import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { Link, Text, Box, Stack } from '@chakra-ui/core';

const FooterLink = ({ icon, href }) => (
  <Link display="inline-block" href={href} isExternal>
    <Box as={icon} size="6" color="#A0AEC0" />
  </Link>
);

const Footer = () => {
  return (
    <Box as="footer" paddingTop="5" paddingBottom="5" textAlign="center" borderTop="solid 1px #808080">
      <Text fontSize="sm">Developed with GatsbyJS, GraphQL, and Chakra.UI</Text>
      <Stack
        shouldWrapChildren
        isInline
        justify="center"
      >
        <FooterLink 
          href="https://github.com/colincoins"
          icon={DiGithubBadge}
        />
      </Stack>
    </Box>
  )  
}

export default Footer;
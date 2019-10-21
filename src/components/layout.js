/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Box } from '@chakra-ui/core'
import Header from "./Header"
import Footer from './Footer';

import { useColorMode } from '@chakra-ui/core';

const Layout = ({ children }) => {

  const { colorMode } = useColorMode();

  const bg = { light: "white", dark: "#1A202C" };
  const textColor = { light: "#1A202C", dark: "white"}
  return (
    <Box bg={bg[colorMode]} color={textColor[colorMode]}> 
      <Header/>
      <Box display="flex" minHeight="100vh" flexDirection="column" maxWidth="900px" margin="0 auto">
        {children}
      </Box>
      <Footer/> 
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

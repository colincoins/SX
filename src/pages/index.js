import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from '../components/Card'
import { Image, Text, Box } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Flex margin="2"> */}
    {/* <Flex direction="row">
      <Stack
        shouldWrapChildren
        justifyContent="center"
        direction="row"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Stack>
    </Flex> */}

    <Box p={10} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Card/>
    {/* <Image
      rounded="lg"
      width={{ md: 40 }}
      src="https://bit.ly/2jYM25F"
      alt="Woman paying for a purchase"
    /> */}
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Card />
    {/* <Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
      Marketing
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Finding customers for your new business
    </Link>
    <Text mt={2} color="gray.500">
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text> */}
  </Box>
</Box>

<Box borderTop="solid 1px gray"p={10} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="https://bit.ly/2jYM25F"
      alt="Woman paying for a purchase"
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
      Marketing
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Finding customers for your new business
    </Link>
    <Text mt={2} color="gray.500">
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text>
  </Box>
</Box>

<Box borderTop="1px solid gray" p={10} display={{ md: "flex" }}>
  <Box flexShrink="0">
    <Image
      rounded="lg"
      width={{ md: 40 }}
      src="https://bit.ly/2jYM25F"
      alt="Woman paying for a purchase"
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="sm"
      letterSpacing="wide"
      color="teal.600"
    >
      Marketing
    </Text>
    <Link
      mt={1}
      display="block"
      fontSize="lg"
      lineHeight="normal"
      fontWeight="semibold"
      href="#"
    >
      Finding customers for your new business
    </Link>
    <Text mt={2} color="gray.500">
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text>
  </Box>
</Box>



    {/* </Flex> */}
  </Layout>
)

export default IndexPage

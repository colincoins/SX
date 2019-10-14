import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/Header'
import Card from '../components/Card'
import { SimpleGrid } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <SimpleGrid minChildWidth="300px" columns={4} spacing="10px">
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  </Layout>
)

export default IndexPage

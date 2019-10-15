import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Image, Badge } from '@chakra-ui/core';

const Card = () => {
  const { spacex } = useStaticQuery(graphql`
    query {
      spacex {
        launches {
          id
          details
          launch_year
          mission_name
        }
      }
    }
  `)

  const { launches } = spacex
  const first_launch = launches[0]
  
  return (
    <Box
      maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src="http://thumbor-prod-us-east-1.photo.aws.arc.pub/Qf8rTiJlxQqrSc60FhyVHSMeCGw=/arc-anglerfish-arc2-prod-bonnier/public/2RUDSLUUYUD6GKH6EZ5DF7VUKE.jpg" alt="astronaut" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded full="full" px="2" variantColor="teal">
            Launch ID:
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {first_launch.id}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          isTruncated
        >
          {first_launch.mission_name}
        </Box>
        <Box>
          {first_launch.details}
        </Box>
      </Box>
    </Box>
  )
}

export default Card;
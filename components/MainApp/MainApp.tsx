import React from 'react';
import {Box, Heading, SimpleGrid} from '@chakra-ui/react';
import GalleryItem from "../GalleryItem/GalleryItem";

const MainApp = () => {
  return (
    <Box p='3em' w='100%'>
      <Heading>Photo gallery</Heading>
      <SimpleGrid minChildWidth='300px' spacing='2em' mt='2em'>
        <GalleryItem/>
        <GalleryItem/>
        <GalleryItem/>
        <GalleryItem/>
        <GalleryItem/>
        <GalleryItem/>
      </SimpleGrid>
    </Box>
  );
};

export default MainApp;
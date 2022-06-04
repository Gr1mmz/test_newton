import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box, Heading, SimpleGrid} from '@chakra-ui/react';

import gallery from '../../store/gallery';
import GalleryItem from '../GalleryItem/GalleryItem';

const MainApp = observer(() => {
  const headingText = (gallery.filter === 'gallery') ? 'Photo gallery' : 'Favorite photos';
  return (
    <Box p='3em' w='100%' maxH='100%'
         sx={{
           overflowY: 'scroll',
           '@media screen and (max-width: 425px)': {padding: '2em'}
         }}>
      <Heading>{headingText}</Heading>
      <SimpleGrid minChildWidth='300px' spacing='2em' mt='2em'
                  sx={{
                    '@media screen and (max-width: 425px)': {
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
                    }
                  }}>
        {gallery.getFilteredItems()?.map(item => <GalleryItem key={item.id} item={item}/>)}
      </SimpleGrid>
    </Box>
  );
})

export default MainApp;
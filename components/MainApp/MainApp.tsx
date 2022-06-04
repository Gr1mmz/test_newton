import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box, Heading, SimpleGrid} from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

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
        {gallery.getFilteredItems().length
          ? gallery.getFilteredItems()?.map(item => <GalleryItem key={item.id} item={item}/>)
          : <Box bg='whiteAlpha.50' p='1em  2em' borderRadius='lg' textAlign='center' justifySelf='center'
                 display='flex' alignItems='center' gap='0.5em' fontSize='0.9em' >
              <AiOutlineInfoCircle/>
              There is nothing here yet
            </Box>
        }
      </SimpleGrid>
    </Box>
  );
})

export default MainApp;
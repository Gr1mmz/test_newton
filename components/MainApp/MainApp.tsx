import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box, Heading, SimpleGrid} from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import gallery from '../../store/gallery';
import GalleryItem from '../GalleryItem/GalleryItem';

const MainApp = observer(() => {
  const headingText = (gallery.filter === 'gallery') ? 'Photo gallery' : 'Favorite photos';
  const preloader = <Box justifySelf='center'><ClipLoader color='whiteAlpha.50' loading={gallery.isLoading} size={50} /></Box>;
  const nothingMessage = <Box bg='whiteAlpha.50' p='1em  2em' borderRadius='lg' textAlign='center' justifySelf='center'
                              display='flex' alignItems='center' gap='0.5em' fontSize='0.9em'>
                          <AiOutlineInfoCircle/>
                          There is nothing here yet
                          </Box>;
  const gridElements = (gallery.getFilteredItems().length === 0)
    ? nothingMessage
    : gallery.getFilteredItems()?.map(item => <GalleryItem key={item.id} item={item}/>);

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
        {gallery.isLoading ? preloader : gridElements}
      </SimpleGrid>
    </Box>
  );
})

export default MainApp;
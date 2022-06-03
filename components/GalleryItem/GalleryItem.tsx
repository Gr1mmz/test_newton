import React from 'react';
import {observer} from 'mobx-react-lite';
import gallery from '../../store/gallery';
import {Box, IconButton, Image, Link} from '@chakra-ui/react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import {GalleryItem} from '../../config/types';

interface IGalleryItem {
  item: GalleryItem
};

const GalleryItem: React.FC<IGalleryItem> = observer(({item}) => {

  return (
    <Box bg='whiteAlpha.50' borderRadius='lg' overflow='hidden' display='flex' flexDirection='column'
         justifyContent='space-between'>
      <Link href={item.download_url} isExternal h='100%'>
        <Box boxSize='full' maxH='230px' h='100%'>
          <Image src={item.download_url} alt={item.author} fit='cover' h='100%' w='100%' loading='lazy'
                 crossOrigin='anonymous'/>
        </Box>
      </Link>
      <Box p='1.5em' bg='#1d1a2a'>
        <Box mt='1' fontWeight='semibold' noOfLines={1} display='flex' justifyContent='space-between'
             alignItems='center'>
          <Link href={item.url} isExternal>
            {item.author}
          </Link>
          <IconButton variant='unstyled' aria-label='Add Favorite' display='flex' justifyContent='center'
                      alignItems='center' onClick={() => gallery.setFavorite(item)}
                      color={item.favorite ? 'red' : '#fff'} icon={item.favorite ? <FaBookmark/> : <FaRegBookmark />}
                      sx={{':hover, :focus': {boxShadow: 'none',}}}/>
        </Box>
      </Box>
    </Box>
  );
})

export default GalleryItem;
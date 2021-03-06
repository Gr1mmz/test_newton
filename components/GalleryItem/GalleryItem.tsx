import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box, IconButton, Image, Link} from '@chakra-ui/react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

import gallery from '../../store/gallery';
import {GalleryItem} from '../../config/types';

interface IGalleryItem {
  item: GalleryItem
};

const GalleryItem: React.FC<IGalleryItem> = observer(({item}) => {
  const imageUrl = `https://picsum.photos/id/${item.id}/${Math.round(item.width/6)}/${Math.round(item.height/6)}`;

  return (
    <Box bg='whiteAlpha.50' borderRadius='lg' overflow='hidden' display='flex' flexDirection='column'
         justifyContent='space-between'>
      <Link href={item.download_url} isExternal h='100%'>
        <Box boxSize='full' maxH='230px' h='100%'>
          <Image src={imageUrl} alt={item.author} fit='cover' h='100%' w='100%' loading='lazy' crossOrigin='anonymous'/>
        </Box>
      </Link>
      <Box p='1.5em' bg='#1d1a2a'>
        <Box mt='1' fontWeight='semibold' noOfLines={1} display='flex' justifyContent='space-between'
             alignItems='center'>
          <Link href={item.url} isExternal>{item.author}</Link>
          <IconButton variant='ghost' aria-label='Add Favorite' display='flex' justifyContent='center'
                      alignItems='center' onClick={() => gallery.setFavorite(item)}
                      color={item.favorite ? 'red' : '#fff'} icon={item.favorite ? <FaBookmark/> : <FaRegBookmark />}
                      sx={{
                        borderRadius: '50%',
                        ':hover': {backgroundColor: 'whiteAlpha.200'},
                        ':hover, :focus': {boxShadow: 'none',}
                      }}/>
        </Box>
      </Box>
    </Box>
  );
})

export default GalleryItem;
import React, {useState} from 'react';
import {Box, IconButton, Image, Link} from '@chakra-ui/react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const GalleryItem = () => {
  const [favorite, setFavorite] = useState(false);
  const onFavoriteClickHandler = () => {
    setFavorite(!favorite);
  };
  return (
    <Box bg='whiteAlpha.50' borderRadius='lg' overflow='hidden'>
      <Link href='https://picsum.photos/id/0/5616/3744' isExternal>
        <Image src='https://picsum.photos/id/0/5616/3744' alt='image' />
      </Link>
      <Box p='6'>
        <Box mt='1' fontWeight='semibold' noOfLines={1} display='flex' justifyContent='space-between'
             alignItems='center'>
          <Link href='https://unsplash.com/photos/yC-Yzbqy7PY' isExternal>
            Header
          </Link>
          <IconButton variant='link' aria-label='Add Favorite' display='flex' justifyContent='center'
                      alignItems='center' onClick={() => onFavoriteClickHandler()} color={favorite ? 'red' : '#fff'}
                      icon={favorite ? <FaBookmark/> : <FaRegBookmark />}
                      sx={{
                        ':hover, :focus': {
                          boxShadow: 'none',
                        }
                      }}/>
        </Box>
      </Box>
    </Box>
  );
};

export default GalleryItem;
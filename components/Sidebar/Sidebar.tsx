import React, {useState} from 'react';
import {Box, Button, Flex, IconButton} from '@chakra-ui/react';
import gallery from '../../store/gallery';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Sidebar = () => {
  const [isSidebarShow, setSidebarShow] = useState(false);

  return (
    <Box bg='#1e1830' w='20%' maxW='360px' minW='250px' p='3em 2em'
         sx={{
           position: 'relative',
           borderTopRightRadius: '30px',
           borderBottomRightRadius: '30px',
           transition: 'left 0.3s ease 0s',
           '@media screen and (max-width: 768px)': {
             position: 'absolute',
             height: '100vh',
             left: isSidebarShow ? '0' : '-250px',
             zIndex: '100'
           }
         }}>
      <IconButton aria-label='Show sidebar' onClick={() => setSidebarShow(!isSidebarShow)} icon={<AiOutlineDoubleRight/>}
                  sx={{
                    position: 'absolute',
                    right: '-30px',
                    backgroundColor: '#1e1830',
                    display: 'none',
                    ':hover': {backgroundColor: '#1e1830',},
                    ':hover, :focus': {boxShadow: 'none',},
                    '@media screen and (max-width: 768px)': {display: 'flex'}
                  }}/>
      <Flex direction='column' gap='0.5em'>
        <Button variant='ghost' colorScheme='purple' color='#fff' onClick={() => gallery.setFilter('all')}
                sx={{
                  justifyContent: 'flex-start',
                  ':hover': {color: 'purple.900'}
                }}>
          Gallery
        </Button>
        <Button variant='ghost' colorScheme='purple' color='#fff' onClick={() => gallery.setFilter('favorite')}
                sx={{
                  justifyContent: 'flex-start',
                  ':hover': {color: 'purple.900'}
                }}>
          Favorites
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
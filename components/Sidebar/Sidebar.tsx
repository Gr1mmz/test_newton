import React from 'react';
import {Box, Button, Flex, Link} from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box bg='#1e1830' w='20%' maxW='360px' minW='250px' p='2em'
         sx={{
           borderTopRightRadius: '30px',
           borderBottomRightRadius: '30px',
         }}
    >
      <Flex direction='column' gap='0.5em'>
        <Button variant='ghost' colorScheme='purple' color='#fff'
                sx={{
                  justifyContent: 'flex-start',
                  ':hover': {
                    color: 'purple.900'
                  }
                }}>
          Gallery
        </Button>
        <Button variant='ghost' colorScheme='purple' color='#fff'
                sx={{
                  justifyContent: 'flex-start',
                  ':hover': {
                    color: 'purple.900'
                  }
                }}>
          Favorites
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
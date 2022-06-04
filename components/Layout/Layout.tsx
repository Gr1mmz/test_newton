import React from 'react';
import {Box} from '@chakra-ui/react';

import Sidebar from '../Sidebar/Sidebar';
import MainApp from '../MainApp/MainApp';

const Layout = () => {
  return (
    <main>
      <Box bg='#141121' w='100%' h='100vh' color='white' display='flex'>
        <Sidebar/>
        <MainApp/>
      </Box>
    </main>
  );
};

export default Layout;
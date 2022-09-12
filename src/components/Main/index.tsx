import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';
import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container className='main-container'>
      <Header>
        <button>
          
          <BackIcon/>
        </button>
        <ProfileInfo>
          <strong>Alan Lima</strong>
          <span>999 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage/>
      <BottomMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu>

    </Container>
  );
}

export default Main;
import React from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationOnIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>
      <ProfileData className='profiledata'>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Alan Lima</h1>
        <h2>@LorenIpsum</h2>
        <p>Developer at <a href="">@twitter</a></p>
        <ul>
          <li>
            <LocationOnIcon/>
            <span>São Paulo, Brasil</span>
          </li>
          <li>
            <CakeIcon/>
            <span>Nascido(a) em 16 de outubro de 1994</span>
          </li>
          </ul>
          <Followage>
            <span>seguindo <strong>94</strong>
            </span>
            <span><strong>94 </strong>seguidores
            </span>            
          </Followage>        
      </ProfileData>
    </Container>
  )
}

export default ProfilePage;
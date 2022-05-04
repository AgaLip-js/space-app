import React from 'react';
import styled from 'styled-components';
import LeftBar from '../components/LeftBar/LeftBar';
import { IPage } from '../interfaces/routesInterface';
import UserPageTemplate from '../templates/UserPageTemplate';

const ProfilePage: React.FC<IPage> = props => (
  <UserPageTemplate>
    <div>
      <p>Halleluja</p>
    </div>
  </UserPageTemplate>
);

export default ProfilePage;

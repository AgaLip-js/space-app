import React from 'react';
import { IPage } from '../interfaces/routesInterface';
import UserPageTemplate from '../templates/UserPageTemplate';

const MessagePage: React.FC<IPage> = props => (
  <UserPageTemplate>
    <div>
      <p>Halleluja</p>
    </div>
  </UserPageTemplate>
);

export default MessagePage;

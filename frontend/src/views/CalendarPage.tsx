import React from 'react';
import Calendar from '../components/Calendar/Calendar'
import { IPage } from '../interfaces/routesInterface';
import UserPageTemplate from '../templates/UserPageTemplate';

const CalendarPage: React.FC<IPage> = props => (
  <UserPageTemplate>
      <Calendar/>
  </UserPageTemplate>
);

export default CalendarPage;

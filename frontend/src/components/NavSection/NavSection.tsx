import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Constants from '~/constants/constants';
import { privateElements } from '~/constants/privateElements'
import { socialElements } from '~/constants/socialElements';

const StyledLink = styled(NavLink)`
    :hover > li {
        color: ${({ theme }) => theme.primaryWhite};

    }

    &.active > li {
        color: ${({ theme }) => theme.primaryWhite};
        background-color: ${({ theme }) => theme.primaryWhite10};
        position: relative;

        :before {
            content: '';
            width: 4px;
            background-color: ${({ theme }) => theme.goldBackground};
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`
const NavSection: React.FC<{type: string}> = ({type}) => {
   const section = type === Constants.NAV_SECTION__PRIVATE ? privateElements : socialElements;


  return (
      <div className='py-8'>
        <div className='flex-between px-4 py-2 border-t border-greyBackground'>
            <p className='text-white20 text-m font-thin'>
                {section.title}
            </p>
        </div>

        <ul>
            {section.elements.map((sec)=> (
                <StyledLink to={sec.path}>
                    <li className='px-8 py-2 text-primaryWhite75'>
                        {sec.title}
                    </li>
                </StyledLink>
            ))}
        </ul>
      </div>
  )
};

export default NavSection
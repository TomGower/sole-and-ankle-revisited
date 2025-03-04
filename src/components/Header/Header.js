import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MobileSuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu" strokeWidth={1} onClick={() => setShowMobileMenu(true)} />
          </UnstyledButton>
        </MobileNav>

        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
      </MainHeader>

    </header>
  );
};

const MainHeader = styled.div`
  /* --color-secondary: purple; */
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-900);
  /* border-bottom: 1px solid blue; */
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const MobileSuperHeader = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: inherit;
    width: 100%;
    height: 0.25rem;
    background-color: var(--color-gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    6vw - 2.5rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileNav = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    gap: clamp(
      1.5rem,
      2.5vw + 1rem,
      2.5rem
    );
  }
`;

export default Header;

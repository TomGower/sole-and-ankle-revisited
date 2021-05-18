/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label={'Menu'}>
        <Header>
          <CloseButton onClick={onDismiss}>
            <Icon id={'close'} color={COLORS.gray[900]} size={'1.5rem'} strokeWidth={1} />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
        <div>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </div>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLORS.gray[700]};
`;

const Content = styled(DialogContent)`
  text-transform: capitalize;
  position: relative;
  background: ${COLORS.white};
  width: 75%;
`;

const Header = styled.header`
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1.375rem;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  color: ${COLORS.gray[900]};
  font-size: 1.125rem;
  margin-left: 2rem;
  margin-top: auto;
  margin-bottom: auto;
`;

const Footer = styled.footer`
  color: ${COLORS.gray[700]};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

export default MobileMenu;

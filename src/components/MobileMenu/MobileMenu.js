/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { X } from 'react-feather';

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
          <Title>Menu</Title>
          <CloseButton onClick={onDismiss}>
            <X />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
        <div>
          <nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </nav>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </div>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
`;

const Content = styled(DialogContent)`
`;

const Header = styled.header`
`;

const CloseButton = styled.button`
`;

const Title = styled.h2`
`;

export default MobileMenu;

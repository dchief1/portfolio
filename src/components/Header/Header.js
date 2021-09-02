import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Span } from './HeaderStyles';
import RightHeader from './RightHeader';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex" , alignItems: "center" , color: "white", marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>Kc</Span>
        </a>
      </Link>
    </Div1>
    <RightHeader />
  </Container>
);

export default Header;

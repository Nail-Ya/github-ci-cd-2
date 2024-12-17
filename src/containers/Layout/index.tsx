import React, { ReactNode } from "react";
import styled from "styled-components/macro";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutChildrenContainer = styled.div`
  flex: 1 1 auto;
`;

interface Props {
  children: ReactNode;
};

const Layout = React.forwardRef(({children}: Props, ref) => {
  return (
    <LayoutContainer ref={ref}>
      <LayoutChildrenContainer>
        { children }
      </LayoutChildrenContainer>
    </LayoutContainer>
  );
});

export default Layout;

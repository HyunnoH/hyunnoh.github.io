import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { css } from "@emotion/react";

const pageStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // color: #232129;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;

const linkBox = css`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const iconBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #232129;
  font-size: 32px;
  width: 48px;
  height: 48px;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main css={pageStyles}>
        <div css={linkBox}></div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

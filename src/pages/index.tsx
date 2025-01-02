import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { css } from "@emotion/react";

const pageStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;

const linkBox = css`
  display: flex;
  justify-content: center;
  gap: 24px;
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

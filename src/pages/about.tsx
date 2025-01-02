import { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import React from "react";
import { css } from "@emotion/react";
import myPic from "../images/1735821869641-21.jpg";

const pageStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;

  h2 {
    text-decoration: underline;
  }
`;

const summary = css`
  display: flex;
  gap: 24px;
`;

const profilePicture = css`
  width: 300px;
  height: 300px;
`;

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main css={pageStyles}>
        <h1>About me</h1>
        <section css={summary}>
          <img src={myPic} alt="profile" css={profilePicture} />
          <div>
            <p>재밌게 살고 싶은 개발자 오현입니다.</p>
            <div>Links</div>
          </div>
        </section>
        <section>
          <h2>WORK EXPERIENCE</h2>
          <h3>
            몬드리안에이아이 <i>Incheon, South Korea</i>
          </h3>
          <h4>프론트엔드 개발자 / 백엔드 개발자</h4>
          <div>2020.02 - 현재</div>
          <ul>
            <li>
              Kubernetes 기반 MLOps 플랫폼 Yennefer의 프론트엔드 & 백엔드 개발
            </li>
            <li>SK디스커버리 Data Intelligence Platform 백엔드 개발</li>
          </ul>
        </section>
        <section>
          <h2>SKILLS</h2>
          <h3>Web Development</h3>
          <ul>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>NestJS</li>
          </ul>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <ul>
            <li>
              <b>Incheon Electronic Meister High School</b>, Incheon, South
              Korea (2017-2019)
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About me</title>;

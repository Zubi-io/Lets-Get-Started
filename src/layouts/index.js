import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.css'

const Layout = ({ children, data }) => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      setShowBackToTop(!!e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: "Make your first GitHub Pull Request",
          },
          {
            name: "keywords",
            content: "GitHub, PullRequest, First OpenSource, contribution",
          },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "msapplication-TileColor", content: "#603cba" },
          { name: "theme-color", content: "#261f28" },
        ]}
      >
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ed11ca" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <div className="card">
          <div className="tab-holder">
            <ul className="tabs">
              <li>
                <Link to="/" exact={true} activeClassName="active">
                  Instructions
                </Link>
              </li>
              <li>
                <Link to="/submissions/" exact={true} activeClassName="active">
                  Submissions
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">{children()}</div>
        </div>
      </div>
      <Footer
        author={data.site.siteMetadata.author}
        profile={data.site.siteMetadata.author}
      />
      { showBackToTop &&
        <button className="toTop" onClick={() => window.scrollTo(0, 0)}>
          <span>Back to Top</span>{" "}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </button>
      }
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
        profile
      }
    }
  }
`

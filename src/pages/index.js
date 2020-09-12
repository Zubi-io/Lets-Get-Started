import React from 'react'
import Link from 'gatsby-link'
import Code from '../components/syntax'
import zubi_logo from "../images/OS.png";


const IndexPage = () => (
  <div>
     <img alt="zubi-logo" className="zlogo" src={zubi_logo} />
    <h3>Great job in getting your first Pull Request merged!.</h3>
    <p>Goto <Link to="/submissions/">Submissions </Link>
    section to view your contribution? <i className="em em-grinning_face_with_star_eyes"></i> 
    </p>
  </div>
)

export default IndexPage

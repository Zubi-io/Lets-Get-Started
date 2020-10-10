import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/userCard'
import Fade from "react-reveal/Fade"

const Submission = ({data}) => (
  <div className="card-container">
    {
      data.allMarkdownRemark.edges.map(profile => {

        return (
          <Fade key={profile.node.id} bottom={true} >
          <Card  username={profile.node.frontmatter.username}
                      fullname={profile.node.frontmatter.fullname}/>
          </Fade>         
          )
      })
    }
  </div>
)

export default Submission


export const profileQuery = graphql`
  query profiles{
    allMarkdownRemark(sort: {fields:[frontmatter___fullname] order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            username
            fullname
          }
        }
      }
    }
  }
`
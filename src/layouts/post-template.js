import React, { Component } from 'react'
// import Parser from 'html-react-parser'

import Layout from '../components/layout'
// import { colors } from '../variables';

class PostPage extends Component {
  render () {
    const postData = this.props.pageContext.allPostData;
    console.log("this.props")
    console.log(this.props)
    console.log(postData)
    // if (typeof postData.acf.testimonial === undefined) {
    //   const editDataTestimonial = 
    // }
    // const editDataProjectInfo = Parser(postData.acf.project_info);
    // const editDataTestimonial = Parser(postData.acf.testimonial);
    return (
        <Layout>
            <h1>{postData.title}</h1>
        </Layout>
    )
  }
}

export default PostPage
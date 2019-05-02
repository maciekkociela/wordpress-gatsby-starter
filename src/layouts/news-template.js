import React, { Component } from 'react'
import parse from 'html-react-parser'

import Layout from '../components/layout'
import StringToHtml from '../components/StringToHtml'
// import { colors } from '../variables';

class PostPage extends Component {
  render () {
    const postData = this.props.pageContext.allPostData;
    return (
        <Layout>
            <h1>{parse(postData.title)}</h1>
            <StringToHtml html={postData.acf.news_content} />   
        </Layout>
    )
  }
}

export default PostPage
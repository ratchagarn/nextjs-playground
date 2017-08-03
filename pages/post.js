/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Page - post
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import Layout from '../components/Layout.js'

export default function Post(props) {
  return (
    <Layout>
       <Content url={props.url} />
    </Layout>
  );
}

function Content(props) {
  return (
    <div>
      <h1>{props.url.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}

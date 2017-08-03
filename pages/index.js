/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Pages - index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


export default function Index(props) {
  const showList = props.show.map(({ show }) => {
    return <ShowListItem data={show} />
  });

  return (
    <Layout>
      <h1>TV Shows</h1>
      {showList}
    </Layout>
  );
};

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  return {
    show: data,
  };
}


function ShowListItem({ data }) {

  return (
    <div className="ShowListItem">
      <ShowRatingLabel rating={data.rating.average} />
      <div className="ShowListItemBody">
        <div className="col image">
          <img src={data.image.medium} alt="" className="showImage" />
        </div>
        <div className="col content">
          <ShowContent data={data} />
        </div>
      </div>

      <style jsx>{`
        .ShowListItem {
          position: relative;
        }

        .ShowListItemBody {
          display: table;
          width: 100%;
          margin-bottom: 20px;
          background-color: #FCFCFC;
          box-shadow: 0 0 2px rgba(0, 0, 0, .4);
        }

        .ShowListItem .showImage {
          display: block;
          width: 100%;
        }

        .ShowListItemBody > .col {
          display: table-cell;
          vertical-align: top;
        }

        .ShowListItemBody > .col.image {
          width: 100px;
        }

        .ShowListItemBody > .col.content {
          padding: 10px;
          padding-right: 80px;
        }
      `}</style>
    </div>
  );
}

function ShowRatingLabel({ rating }) {
  return (
    <div className="ShowRatingLabel">
      <h5>Rating</h5>
      {Math.ceil(rating)}
      <style jsx>{`
        .ShowRatingLabel {
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px;
          background-color: #3A90E0;
          color: white;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          box-shadow: 0 0 5px rgba(255, 255, 255, .4);
        }

        .ShowRatingLabel > h5 {
          margin: 0 0 5px 0;
        }
      `}</style>
    </div>
  );
}

function ShowContent({ data }) {
  return (
    <div className="ShowContent">
      <Link as={`/p/${data.id}`} href={`/post?id=${data.id}`}>
        <a>{data.name}</a>
      </Link>
      <p><strong>Status:</strong> {data.status}</p>
      <p><strong>Runtime:</strong> {data.runtime}</p>
      <p><strong>Premiered:</strong> {data.premiered}</p>

      <style jsx>{`
        .ShowContent a {
          display: inline-block;
          margin-bottom: .5em;
          color: #0D7749;
          font-size: 18px;
          font-weight: bold;
        }

        .ShowContent a:hover {
          color: red;
          text-decoration: none;
        }

        .ShowContent > p {
          margin: 0;
          font-size: 14px;
          line-height: 2em;
        }
      `}</style>
    </div>
  );
}

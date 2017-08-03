/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Page - post
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

export default function Post({ show }) {
  const {
    name,
    image,
    summary,
    type,
    language,
    genres,
    premiered,
    status,
    officialSite,
    ...remainingData,
  } = show;

  return (
    <Layout>
      <h2>{name}</h2>
      <p><img src={image.medium} alt="" /></p>
      <p>{summary.replace(/<[/]?p>/g, '')}</p>

      <table>
        <tbody>
          <tr>
            <td>Type:</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Language:</td>
            <td>{language}</td>
          </tr>
          <tr>
            <td>Genres:</td>
            <td>{<GenresList genres={genres} />}</td>
          </tr>
          <tr>
            <td>Premiered:</td>
            <td>{premiered}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{status}</td>
          </tr>
          <tr>
            <td>Official Site:</td>
            <td>{officialSite ? <a href={officialSite} target="_blank">{officialSite}</a> : '---'}</td>
          </tr>
        </tbody>
      </table>
      <h3>Other information</h3>
      <pre>{JSON.stringify(remainingData, null, 2)}</pre>

      <style jsx>{`
        p {
          line-height: 1.5em;
          color: #666;
        }

        a {
          color: blue;
        }

        a:hover {
          color: red;
          text-decoration: none;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        td {
          padding: 8px;
          border: 1px solid #ccc;
          font-size: 12px;
        }

        table tbody > tr > td:first-child {
          width: 120px;
        }

        pre {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 2px;
          background-color: #f6f6f6;
          font-size: 12px;
        }
      `}</style>
    </Layout>
  );
}

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json();

  return {
    show,
  };
}

function GenresList({ genres }) {
  return (
    <div>
      {genres.map((item) => <span key={item}>{item}</span>)}

      <style jsx>{`
        span {
          display: inline-block;
          margin-right: .5em;
          padding: 5px 10px;
          background-color: #75092B;
          color: white;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}

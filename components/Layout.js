/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Layout
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className="MainLayout">
      <Header />
      <div className="MainLayoutBody">
        {props.children}
      </div>
      <Footer />

      <style jsx global>{`
        html {
          box-sizing: border-box;
          height: 100%;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }

        body {
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: Arial, Verdana, Tahoma;
          font-size: 16px;
        }
      `}</style>

      <style jsx>{`
        .MainLayoutBody {
          height: 100%;
          padding-left: 20px;
          padding-right: 20px;
          min-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
}

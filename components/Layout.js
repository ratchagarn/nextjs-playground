/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Layout
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Header from './Header';

export default function Layout(props) {
  return (
    <div className="MainLayout">
      <Header />
      {props.children}

      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Verdana, Tahoma;
          font-size: 16px;
        }
      `}</style>

      <style jsx>{`
        .MainLayout {
          width: 95%;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  );
}

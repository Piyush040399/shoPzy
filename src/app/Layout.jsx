import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="px-8 py-4" >{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

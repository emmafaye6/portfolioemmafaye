import Header from "./header";
import Footer from "./footer";
import FooterDivider from "../../components/layout/pinkdivider";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterDivider />
      <Footer />
    </>
  );
}
export default Layout;

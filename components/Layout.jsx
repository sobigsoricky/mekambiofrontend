import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar color={"#fff"}/>
      <main>{children}</main>
      <Footer />  
    </> 
  );
}

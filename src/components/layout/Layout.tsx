import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-dark flex min-h-screen flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

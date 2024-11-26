import Header from "./header";
import Footer from "./footer";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return(
    <div>
      <Header />
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
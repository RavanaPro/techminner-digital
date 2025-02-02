import "bootstrap/dist/css/bootstrap.css";
import { cn } from "../lib/utils";
import { aeonik, helvetica } from "../lib/fonts";
import Header from "../components/layout/header";
import "../styles/globals.scss";
import Head from "next/head";

export const metadata = {
  title: "Tech Minner | Humanizing Digital Experiences",
  description: "Tech Minner | Humanizing Digital Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `</script><link rel='preload' href='style.css'  as='style'  onload="this.onload=null;this.rel='stylesheet'"/><script>`,
          }}


         
        />
        <link
 rel="icon"
 type="image/png"
 href="/favicon.ico"
 sizes="16x16"
 />
        
      </Head>

      <body className={cn(aeonik.variable, helvetica.variable)}>
        <Header />
        <div className={cn("main-style")}>{children}</div>
      </body>
    </html>
  );
}

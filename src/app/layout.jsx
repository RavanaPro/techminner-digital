import "bootstrap/dist/css/bootstrap.css";
import { cn } from "../../lib/utils";
import { aeonik, helvetica } from "../../lib/fonts";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import "../../styles/globals.scss";
import Head from "next/head";

export const metadata = {
  title: "Tech Minner | Making Technology More Human",
  description: "Tech Minner | Making Technology More Human",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
      />
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `</script><link rel='preload' href='style.css'  as='style'  onload="this.onload=null;this.rel='stylesheet'"/><script>`,
          }}
        />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
          }}
        />
      </Head>

      <body className={cn(aeonik.variable, helvetica.variable)}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3PTTNP4"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <Header />
        <div className={cn("main-style")}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

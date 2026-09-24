import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = { //ovo samo eksportuje titl za sve unutar lejauta iako nije naglasen u html tj headu lejauta
  title:'The Wild Oasis'
}

export default function RootLayout({children}) {
  return <html lang='en'>
    <body>
      <Logo/>
      <Navigation/>
      <main>{children}</main> 
      <footer>Copyright by The Wild Oasis</footer>
    </body>
  </html>
}
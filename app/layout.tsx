import { Provider } from "react-redux";
import store from "../redux/store";
import ReduxApp from "./ReduxApp";
import './globals.css';

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
};
  

const RootLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <html lang="en">
        <body>
            <ReduxApp>
                {children}
            </ReduxApp>
        </body>
      </html>
    );
}

export default RootLayout;
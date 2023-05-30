import { Provider } from "react-redux";
import store from "../redux/store";
import ReduxApp from "./ReduxApp";
import './globals.css';
import RootLayout from "./RootLayout";
import themeStyles from '../components/themeStyles.module.css';

export const metadata = {
    title: 'Portfolio',
    description: 'Sven Buskov Romme',
};
  
const Component = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <html lang="en">
        <body className={themeStyles.root} >
            <RootLayout>
              {children}
            </RootLayout>
        </body>
      </html>
    );
}

export default Component;
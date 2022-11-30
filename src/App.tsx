import GlobalStyle from './styles/global';
import Footer from './components/Footer';
import FormInsert from './pages/FormInsert';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header />
      <FormInsert />
      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;

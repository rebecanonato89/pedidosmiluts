import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import FormInsert from './pages/FormInsert';



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

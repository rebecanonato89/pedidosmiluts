import GlobalStyle from './styles/global';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
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

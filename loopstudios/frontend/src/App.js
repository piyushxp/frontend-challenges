import Creations from './components/Creations';
import CreationsDesktop from './components/CreationsDesktop';
import Footer from './components/Footer';
import Header from './components/Header';
import Interactive from './components/Interative';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className='App'>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </div>
  );
}

export default App;

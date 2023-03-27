import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyComponent/>
          Learn React
        </a>
        <ButtonComponent buttonText="ciao" />
        <ButtonComponent buttonText="a" />
        <ButtonComponent buttonText="tutti" />

        <ImageComponent src="https://picsum.photos/id/237/200/300" alt="Un'immagine di esempio" />
        <ImageComponent src="https://picsum.photos/200/300?grayscale" alt="Un'immagine in bianco e nero" />
        <ImageComponent src="https://picsum.photos/200/300/?blur" alt="Un'immagine con blur" />
      </header>
    </div>
  );
}

export default App;

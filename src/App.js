import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';

function App() {
  return (
    <div className="App">
      <AddBook/>
      <SearchBook/>
      <DeleteBook/>
    </div>
  );
}

export default App;

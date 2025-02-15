import './App.css';
import Footer from './components/footer/footer.tsx';
import Header from './components/header/header.tsx';
import SearchBar from './components/searchBar/searchBar.tsx';

import ImagesList from './components/imagesList/imagesList.tsx';

function App() {
    return (
        <>
            <Header />
            <SearchBar placeholder="Search art, artist, work..." />
            <ImagesList />
            <Footer></Footer>
        </>
    );
}

export default App;

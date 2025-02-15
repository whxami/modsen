import './App.css';
import Footer from './components/footer/footer.tsx';
import Header from './components/header/header.tsx';
import SearchBar from './components/searchBar/searchBar.tsx';
import ImageCard from './components/imageCard/imageCard.tsx';

function App() {
    return (
        <>
            <Header />
            <SearchBar placeholder="Search art, artist, work..." />
            <ImageCard image={"zxczxc"} description={"zxczxczxc"} isActive={false}/>
            <Footer></Footer>
        </>
    );
}

export default App;

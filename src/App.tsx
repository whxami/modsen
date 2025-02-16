import './App.css';
import AppRouter from './utils/routeConfig/AppRouter.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;

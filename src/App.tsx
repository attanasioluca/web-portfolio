import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppFooter from './components/shared/AppFooter.tsx';
import AppHeader from './components/shared/AppHeader.tsx';
import { Spinner, Center } from '@chakra-ui/react';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects.tsx'));

function App() {
    return (
        <Router>
            <AppHeader />

            <Suspense
                fallback={
                    <Center mt="40px">
                        <Spinner size="xl" />
                    </Center>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetailPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>

            <AppFooter />
        </Router>
    );
}

export default App;

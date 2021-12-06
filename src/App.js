import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserForm from './components/UserForm';
import Subject from './components/Subject';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userForm" element={<UserForm />} />
          <Route path="/subjectSelect" element={<Subject />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

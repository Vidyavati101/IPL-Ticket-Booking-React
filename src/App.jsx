import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Matches from "./pages/Matches";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Matches />
            <BookingForm />
            <Footer />
        </>
    );
}

export default App;
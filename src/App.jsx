import React from "react";
import BodySection from "./components/BodySection";
import EventSlider from "./components/EventSlider";
import HeroSection from "./components/HeroSection";
import NavBar from "./UI/NavBar";
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[100vh] bg-blue-500 transition-all duration-500">
          <PacmanLoader
            color={"#1f34d0"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <HeroSection />
          <EventSlider />
          <BodySection />
        </div>
      )}
    </div>
  );
};

export default App;

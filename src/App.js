import './App.css';
import Profile from './profile/profile component/Profile';
import image from "../src/image/med.jpg";


function App() {

  const handleClick = (name) => {
    alert(name);
  }
  return (
    <div className="App">
      <Profile
        FullName="Mohamed Haouali"
        Bio="Versatile Software Engineer training engineer with a solid management background, 
        I design and build websites, Android web and mobile applications. Passionate"
        Profession="Software development engineer"
        handleClick={handleClick}
      >
        <img src={image} alt="photoduprofil" />

      </Profile>

    </div >
  );
}

export default App;

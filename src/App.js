import "./App.css";
import onLinkClick from "./script";
import erasmusfoto from "./img/erasmusfoto.jpeg";

function App() {
  return (
    <div className="container">
      <aside>
        <div class="navbar">
          <div class="user-logo">
            <img src={erasmusfoto} alt="logo" />
          </div>
          <nav>
            <ul>
              <li class="selectedLink" name="home">
                Home
              </li>
              <li name="about">About Me</li>
              <li name="resume">Resume</li>
              <li name="contact">Contact</li>
            </ul>
          </nav>
        </div>
      </aside>
      <main>
        <div class="card active home">
          <div class="title">Home page</div>
          <div class="content">
            Selamlar ben Yavuz Mollahamzaoğlu şuan ALKÜDE öğrenim görmekte olan
            EE mühendisliği 2. sınıf öğrencisiyim . Genel olarak ilgi alanlarım
            Web site Developing, Bilinçli tüketicilik, Quantum Fiziği.
          </div>
        </div>
        <div class="card about">
          <div class="title">About me</div>
          <div class="content">Content goes here</div>
        </div>
        <div class="card resume">
          <div class="title">Resume</div>
          <div class="content">Content goes here</div>
        </div>
        <div class="card contact">
          <div class="title">Contact me</div>
          <div class="content">Content goes here</div>
        </div>
      </main>
    </div>
  );
}

export default App;

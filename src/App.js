import "./App.css";
import onLinkClick from "./script";
import erasmusfoto from "./img/erasmusfoto.jpeg";
import { color } from "@mui/system";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { content } from "./content";
import { Button } from "antd";
import { Helmet } from "react-helmet";
//SAYFADA AŞŞAĞIYA GİTTİKTEN SONRA BTK MSAYFA İÇİ LİNKTEN VİDEOYU İZLE ÖRNEĞİ YAP
//CV İNDİR BUTONU EKLE

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const title = content[selectedLanguage].title;
  useEffect(() => {
    console.log(title);
  }, [selectedLanguage]);
  <link rel="icon" href="img/favicon.ico" type="image/x-icon"></link>;

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yavuz Mollahamzaoğlu</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Testing icon and title" />
      </Helmet>

      {selectedLanguage === "english" ? (
        <Button
          onClick={() => {
            setSelectedLanguage("turkish");
          }}
        >
          Türkçe
        </Button>
      ) : (
        <Button
          onClick={() => {
            setSelectedLanguage("english");
          }}
        >
          English
        </Button>
      )}

      <h1 style={{ minWidth: 150, paddingLeft: 8 }}>{title}</h1>
      {
        <p
          style={{
            marginTop: 50,
            marginLeft: -180,
            paddingRight: 30,
            marginRight: 20,
            textAlign: "center",
          }}
        >
          <u>
            <b>
              <i>
                <pre style={{ marginRight: 20 }}>Academic Timeline</pre>
                <span>
                  <ul>
                    <li
                      style={{
                        listStyleType: "revert",
                        fontSize: 15,
                        marginTop: 20,
                        marginRight: 20,
                      }}
                    >
                      24 Kasım İlköğretim Okulu
                    </li>
                    <li
                      style={{
                        listStyleType: "revert",
                        fontSize: 15,
                        marginTop: 20,
                        marginRight: 20,
                      }}
                    >
                      Tevfik Sırrı Gür Anadolu Lisesi
                    </li>
                    <li
                      style={{
                        listStyleType: "revert",
                        fontSize: 15,
                        marginTop: 2,
                        marginRight: 20,
                      }}
                    >
                      EGEM Temel Lisesi
                    </li>
                    <li
                      style={{
                        listStyleType: "revert",
                        fontSize: 15,
                        marginTop: 20,
                        marginRight: 20,
                      }}
                    >
                      <a href="https://www.alanya.edu.tr/">
                        Alanya Alaaddin Keykubat Üniversitesi(2020-?)
                      </a>
                    </li>
                    <li
                      style={{
                        listStyleType: "revert",
                        fontSize: 15,
                        marginTop: 20,
                        marginRight: 20,
                      }}
                    >
                      <a href="https://pb.edu.pl/">
                        Politechnika Bialystok(2022-2023)
                      </a>
                    </li>
                  </ul>
                </span>
              </i>
            </b>
          </u>
        </p>
      }
      <aside>
        <div class="navbar">
          <div class="user-logo">
            <img src={erasmusfoto} title="Yavuz Mollahamzaoğlu" alt="logo" />
          </div>
          <nav>
            <ul>
              <li class="selectedLink" name="home">
                {content[selectedLanguage].home_list}
              </li>
              <li name="about">{content[selectedLanguage].about_list}</li>
              <li name="resume">{content[selectedLanguage].project_list}</li>
              <li name="contact">{content[selectedLanguage].contact_list}</li>
            </ul>
          </nav>
        </div>
      </aside>
      {
        <main>
          <div class="card active home">
            <div class="title">{content[selectedLanguage].home_title}</div>
            <div class="content" style={{ marginTop: 25 }}>
              <div> {content[selectedLanguage].home_content}</div>
            </div>
          </div>

          <div class="card about">
            <div class="title">{content[selectedLanguage].about_title}</div>
            <div class="content" style={{ marginTop: 25 }}>
              {content[selectedLanguage].about_content}
            </div>
          </div>
          <div class="card resume" style={{ overflow: "scroll" }}>
            <div class="title">{content[selectedLanguage].project_title}</div>
            <div class="content">
              {content[selectedLanguage].project_content}
              <h1 style={{ marginTop: 25, color: "red" }}>React JS:</h1>
              <li className="list">
                <a href="https://github.com/YavuzMollahamzaoglu/rick-and-morty-app">
                  Rick and Morty App
                </a>
              </li>
              <li className="list">
                <a href="https://github.com/YavuzMollahamzaoglu/country-list-app">
                  Country List
                </a>
              </li>
              <li className="list">
                <a href="https://github.com/YavuzMollahamzaoglu/personal-website">
                  Personal Website
                </a>
              </li>
            </div>
          </div>
          <div class="card contact">
            <div class="title">{content[selectedLanguage].contact_title}</div>
            <div class="content">
              <h1 style={{ marginTop: 25, color: "yellow" }}>İletişim:</h1>
              <li className="list">
                <div>E-mail: yavuzmollahamzaoglu@gmail.com</div>
                <div>200207056@ogr.alanya.edu.tr</div>
              </li>
              <li className="list">Telefon: +90537463925</li>
              <h1 style={{ marginTop: 25, color: "yellow" }}> Sosyal Medya:</h1>
              <li className="list">
                <a>GitHub: YavuzMollahamzaoglu</a>
              </li>
              <li className="list">
                <a>İnstagram: mollahamzaoğlu</a>
              </li>
              <li className="list">
                <a>LetterBox: mollahamzaoglu</a>
              </li>
            </div>
          </div>
        </main>
      }
    </div>
  );
}

export default App;

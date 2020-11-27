/// BASIC
import React, { useState} from "react";
import { Route, Switch } from "react-router-dom";
import api from "api/APIHandler";

/// PAGES
import Simulator from "views/Simulator";
import Results from "views/Results";
import NotFound from "views/NotFound";

/// COMPONENTS
import Modal from 'components/partials/Modal';

/// STYLES
import "styles/app.css";
import "styles/reset.css";

/// GOOGLE ANALYTICS
import ReactGA from "react-ga";

if (window.location.hostname !== "localhost") {
  ReactGA.initialize("G-2ZWYF277Q1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactGA.event({
  category: "Screens",
  action: window.screen.width + ":" + window.screen.height,
});

function App() {
  const width = window.innerWidth;

  // function deleteSheet(e) {
  //   //e.preventDefault();
  //   console.log(localStorage.getItem("idSheet-VSGP"));
  //   if (localStorage.getItem("idSheet-VSGP")) {
  //     var idSheet = localStorage.getItem("idSheet-VSGP");
  //     localStorage.removeItem("idSheet-VSGP");
  //     api
  //       .delete("/sheet/delete", idSheet)
  //       .then((res) => {
  //         console.log("SHEET DELETED!", res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }

  // // useBeforeunload((e) => deleteSheet(e))
  // window.addEventListener("beforeunload", (e) => deleteSheet(e));

  const Mobile = () => {
    return (
      <div id="mobile-message">
        <div>
          <p>
            La version mobile n'est pas encore disponible. Nous vous recommandons de toutes façons
            l'utilisation d'une tablette ou d'un ordinateur pour profiter pleinement des
            fonctionnalités du site. A bientôt !
          </p>
        </div>
      </div>
    );
  };

  const Desktop = () => {

    const [open, setOpen] = useState(true);

    return (
      <main id="content-main">
        <Modal 
        isOpen={open}
        closeModal={()=>setOpen(false)}
        children={
          <div id="intro-vsgp">
          <h3>Bienvenue sur Mission Climat<br></br>Vallée Sud - Grand Paris</h3>
          <p>Cet outil a été développé dans le cadre de l’élaboration du <a href="https://www.valleesud.fr/fr/PCAET" target="_blank">Plan Climat Air Energie Territorial de Vallée Sud – Grand Paris</a>. Il vous permet <b>d’imaginer le futur de votre territoire grâce à l’évolution des mesures prises dans les différents secteurs d’actions</b> (des bâtiments, de l’énergie, des transports, de l’industrie ou encore des énergies renouvelables). </p>
          <p><b>Déplacez les curseurs des secteurs d’actions</b> pour visualiser les effets sur le territoire à horizon 2030 et testez votre niveau d’ambition par rapport aux objectifs potentiels pour le PCAET de Vallée Sud – Grand Paris. Il s’agit d’un véritable <b>simulateur climat</b>, permettant de visualiser les efforts à réaliser pour agir contre le réchauffement climatique. </p>
          <p className="p_minor">Il a une vocation pédagogique, et ne préjuge en rien des objectifs et actions qui seront in fine retenus dans la version finale du Plan Climat Air Energie Territorial. Il se focalise sur les émissions de gaz à effet de serre directement émises sur le Territoire de Vallée Sud – Grand Paris, liées aux secteurs les plus émetteurs sur le territoire : habitat, tertiaire, transports, industrie, énergie.</p>
          <p className="p_minor"><b>Les émissions liées à la production et aux transports de biens et services</b>, qu’ils soient produits localement, nationalement ou importés ne sont pas paramétrables dans l’outil, car elles dépendent essentiellement de politiques nationales et internationales. A titre indicatif, elles sont toutefois prises en compte dans l’indicateur « empreinte carbone ».
</p>
          <p className="p_minor">Pour en savoir plus sur ces impacts, rendez-vous sur le <a href="http://mission-climat.io/" target="_blank">Simulateur de l’échelle nationale</a> ou sur le <a href="https://ecolab.ademe.fr/apps/climat/simulateur/bilan?PR=106" target="_blank">calculateur carbone individuel</a></p>
          </div> 
        }>
      </Modal>
        <Switch>
          {/* BASIC */}
          <Route exact path="/" component={Simulator} />
          {/* SIMULATOR */}
          <Route path="/simulator" component={Simulator} />
          <Route path="/results" component={Results} />
          {/* NOT FOUND */}
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  };

  return width > 0 ? <Desktop /> : <Mobile />;
}

export default App;

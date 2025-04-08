import React from "react";
import "./App.css";
import Meny from "./Meny";


const App = () => {
	return (
		<div>
			<header>
				<div className="logga">
					<img src={"./img/logga.png"} className="logga" alt="Eurasias logotyp" />
				</div>
				<div className="meny">
					<nav>
						<a href="/" tabIndex="1">Start</a>
						<a href="/meny" tabIndex="2">Meny</a>
						<a href="/boka" tabIndex="3">Boka</a>
						<a href="/om" tabIndex="4">Om oss</a>
						<a href="/oppettider" tabIndex="5">Öppettider</a>
					</nav>
				</div>
				<img className="burger" src={"./img/burger-bar.png"} alt="Meny ikon" />
			</header>
			<div>
				<img src={"./img/banner2.png"} className="banner" alt="Eurasia" />
			</div>
			<section>
				<h2>Vi serverar Umeås bästa kinesiska mat!</h2>
				<div className="start_bilder">
					<div className="meny_bild_div">
						<img className="knapp_bild" src={"./img/meny.png"} alt="Vår meny bakgrundsbild" />
						<div className="centered">
							<a href="/meny" tabIndex="6">
								<h1>Meny</h1>
							</a>
						</div>
					</div>
					<div className="bord_bild_div">
						<img className="knapp_bild" src={"./img/bord.png"} alt="Boka bord bakgrundsbild" />
						<div className="centered">
							<a href="/boka" tabIndex="7">
								<h1>Boka bord</h1>
							</a>
						</div>
					</div>
				</div>
				<h2>Hitta hit!</h2>
				<img className="karta" src={"./img/karta.png"} alt="Karta över Eurasia" />
			</section>
			<footer>
				<p>Restaurang Eurasia AB - Renmarksesplanaden 12 - 90326 UMEÅ</p>
			</footer>
		</div>
	);
};

export default App;

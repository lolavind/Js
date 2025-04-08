import React from "react";
import "./style.css";
import logga from "./public/logga.png";
import burgerIcon from "./public/burger-bar.png";

const Boka = () => {
	return (
		<div>
			<header>
				<div className="logga">
					<img src={logga} alt="Eurasias logotyp" />
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
				<img className="burger" src={burgerIcon} alt="Meny ikon" />
			</header>
			<div className="boka_bord_bakgrund">
				<h1 className="boka-bord">Boka bord</h1>
				<div className="boknings_text">
					<p>
						Fyll i dina uppgifter och klicka sedan på “skicka” för att skicka in <br />
						en bokningsförfrågan. Vi återkommer så snabbt som vi kan!<br />
						OBS! Ingen bordsbokning är gällande innan vi har återkopplat till dig och bekräftat <br />
						bokningen.
					</p>
				</div>
				<div className="form">
					<form action="">
						<label htmlFor="Förnamn">Förnamn</label>
						<input type="text" tabIndex="6" id="Förnamn" name="Förnamn" placeholder="..." />
						<label htmlFor="Efternamn">Efternamn</label>
						<input type="text" tabIndex="7" id="Efternamn" name="Efternamn" placeholder="..." />
						<label htmlFor="Epost">Epost</label>
						<input type="text" tabIndex="8" id="Epost" name="Epost" placeholder="..." />
						<br />
						<label htmlFor="Datum">Datum</label>
						<input type="text" tabIndex="9" id="Datum" name="Datum" placeholder="DD/MM/ÅÅ" />
						<label htmlFor="Tid">Tid</label>
						<input type="text" tabIndex="10" id="Tid" name="Tid" placeholder="XX:XX" />
						<label htmlFor="Antal">Antal</label>
						<input type="text" tabIndex="11" id="Antal" name="Antal" placeholder="..." />
						<br />
						<input className="submit" tabIndex="12" type="submit" value="Submit" />
					</form>
				</div>
			</div>
			<footer>
				<p>Restaurang Eurasia AB - Renmarksesplanaden 12 - 90326 UMEÅ</p>
			</footer>
		</div>
	);
};

export default Boka;
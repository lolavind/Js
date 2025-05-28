import React from "react";


const Boka = () => {
	return (
		<div>
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
		</div>
	);
};

export default Boka;
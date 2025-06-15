import React, { useState } from 'react';

//const SeeMore = () => { return 'kalle'}
function SeeMore() {
	const [showMore, setShowMore] = useState(false);

	const toggleMenu = () => {
		setShowMore(!showMore);
	};


	/* if (showMore) {
		return (<div onClick={() => {setShowMore(false)}}>Mer text...</div>)	
	} */

	return (
		/* 		<div onClick={() => {setShowMore(true)}}>Se mer...</div> */
		
		<div className="expand-menu">
			{showMore && (
				<ul className="extraAlternatives">
					<li>Kung pao-kyckling 175:-</li>
					<li>Pekinganka 200:-</li>
					<li>Dagens sushi 180:-</li>
				</ul>
			)}

			<div onClick={toggleMenu} className="toggle-button se_mer">
				{showMore ? 'Visa mindre' : 'Se mer...'}
			</div>
			
		</div>
		
	);

}



export default SeeMore
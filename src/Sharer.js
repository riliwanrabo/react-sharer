import React, { useState, useEffect, Fragment } from 'react';
import SharerModal from './SharerModal';

function Sharer({ text, icon, shareTitle }) {
	const [ fallback, setFallback ] = useState(false);
	const [ isVisible, setIsVisible ] = useState(false);
	// check if container supports native share
	useEffect(() => {
		navigator.share ? setFallback(true) : setFallback(false);
	});

	const shareData = {
		title: document.title,
		url: document.querySelector('link[rel=canonical]')
			? document.querySelector('link[rel=canonical]').href
			: document.location.href,
		text: shareTitle
	};

	const handleToggle = async (e) => {
		e.preventDefault();
		// check state for fallback
		if (fallback) {
			try {
				await navigator.share(shareData);
				// do some success stuff here
			} catch (err) {
				// do some error stuff here
				console.log(err);
			}
		} else {
			// activate classes on body or child component
			setIsVisible(true);
		}
	};

	return (
		<Fragment>
			<div className="share-button-wrapper" onClick={handleToggle}>
				<div className="share-button-icon">{icon}</div>
				<div className="share-button-text">{text}</div>
			</div>

			<SharerModal modalVisible={isVisible} shareData={shareData} handleClose={setIsVisible} />
		</Fragment>
	);
}
export default Sharer;

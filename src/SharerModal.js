import React, { Fragment } from 'react';

function SharerModal({ modalVisible, shareData, handleClose }) {
	return (
		<Fragment>
			<div className={`${'share-modal'} ${modalVisible ? 'opened' : 'closed'}`}>
				{/* Head */}
				<section className="modal-header">
					<h3 className="modal-title">Share Content</h3>
					<button className="close-button" onClick={() => handleClose(false)}>
						&times;
					</button>
				</section>
				<section className="modal-body">
					<div className="row">
						<div>
							<button>Facebook</button>
						</div>
						<div>
							<button>Twitter</button>
						</div>
					</div>

					<div className="row">
						<div>
							<button>Instagram</button>
						</div>
						<div>
							<button>Tiktok</button>
						</div>
					</div>
				</section>
				<section className="modal-footer">
					<div className="modal-footer-link">{shareData.url}</div>
					<button className="modal-footer-button">Copy Link</button>
				</section>
			</div>
		</Fragment>
	);
}

export default SharerModal;

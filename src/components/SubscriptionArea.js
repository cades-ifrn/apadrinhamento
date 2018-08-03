import React from 'react'

const SubscriptionArea = () => {
  return (
    <section className="subscription-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h3>Subscribe for our Newsletter</h3>
								<span className="text-uppercase">Re-imagining the way</span>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div id="mc_embed_signup">
								<form target="_blank" noValidate action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
									<input type="email" name="EMAIL" placeholder="Email address" required />
									<div style={{position: 'absolute', left: '-5000px'}}>
										<input type="text" name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" />
									</div>
									<button className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></button>
									<div className="info"></div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default SubscriptionArea

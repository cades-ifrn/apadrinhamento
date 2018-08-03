import React from 'react'

const FeaturedArea = () => {
  return (
    <section className="featured-area">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="single-feature d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-sun"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Stunning Visuals</h6>
									<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-code"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Clean Code</h6>
									<p>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility </p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-clock"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Punctuality</h6>
									<p>If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that nice big screen</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default FeaturedArea

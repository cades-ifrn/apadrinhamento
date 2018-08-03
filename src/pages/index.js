import React from 'react'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import BannerArea from '../components/BannerArea'

import FeaturedArea from '../components/FeaturedArea'
import ServiceArea from '../components/ServiceArea'

import AmazingWorksArea from '../components/AmazingWorksArea'

import StoryArea from '../components/StoryArea'
import SubscriptionArea from '../components/SubscriptionArea'

import FooterArea from '../components/FooterArea'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div>
    <Wrapper isFirst>
      <Header />

      <BannerArea />
      <FeaturedArea />
      <ServiceArea />
    </Wrapper>

    <Wrapper>
      <SubscriptionArea />
      <StoryArea />
      {/* <FooterArea /> */}
      <Footer />
    </Wrapper>
  </div>
)

export default IndexPage

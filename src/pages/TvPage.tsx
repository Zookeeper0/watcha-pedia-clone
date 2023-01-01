import React from 'react';
import styled from '@emotion/styled';

import Footer from '../layout/Footer'
import Header from '../layout/Header'

import AiringTodayTvSection from '../features/tv/airingToday';
import OnTheAirTvSection from '../features/tv/onTheAir';
import LatestTvSection from '../features/tv/latest';
import PopularTvSection from '../features/tv/popular';
import TopRateTvSection from '../features/tv/topRate';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 48px 0;
`;

const TvPage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestTvSection />
          <AiringTodayTvSection />
          <OnTheAirTvSection />
          <PopularTvSection />
          <TopRateTvSection />
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default TvPage;

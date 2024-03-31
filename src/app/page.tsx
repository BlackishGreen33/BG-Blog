import { NextPage } from 'next';

import Container from '@/common/components/elements/Container';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  return (
    <>
      <Container data-aos="fade-up">
        <Home />
      </Container>
    </>
  );
};

export default HomePage;

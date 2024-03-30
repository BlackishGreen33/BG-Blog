import { NextPage } from 'next';

import Container from '@/common/components/elements/Container';

const HomePage: NextPage = () => {
  return (
    <>
      <Container data-aos="fade-up">
        <h1>Welcome to my blog</h1>
      </Container>
    </>
  );
};

export default HomePage;

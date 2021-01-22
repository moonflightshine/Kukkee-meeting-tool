import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Greetings from "../src/components/Greetings";
import Layout from "../src/components/Layout";
import withprivateAuth from "../src/utils/privateAuth";

const Dashboard = (): JSX.Element => {
  const displayName = useSelector((state) => state.authReducer.displayName);

  return (
    <Layout>
      <Container className="" fluid>
        <h2> Welcome {displayName}</h2>
        <Greetings />
      </Container>
    </Layout>
  );
};

export default withprivateAuth(Dashboard);

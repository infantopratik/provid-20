import React from "react";
import { Layout } from "antd";
import "./App.css";
import "./css/utilities.css";
import ProviderListing from "./scenes/ProvderListing/ProviderListing";
import { H1 } from "./scenes/ProvderListing/ProviderListingStyles"
const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <H1>PROVID-20</H1>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <ProviderListing />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

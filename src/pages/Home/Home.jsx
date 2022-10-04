import { Table } from "../../components/Table/Table";
import React from "react";
import axios from "axios";
import "./home.css";
export function Home() {
  const [data, setData] = React.useState([]);
  async function getData() {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  }
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <section className="home">
      <div className="container">
        <Table elements={data} setData={setData} />
      </div>
    </section>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <div>
      <div className="title">
        <h1>
          High
          <br />
          Fashion <br />
          Society
        </h1>
        <h4>COMMING SOON</h4>
      </div>
      <div className="subtext">
        <h5>Some of our Products</h5>
      </div>
      <Card />
    </div>
  );
}

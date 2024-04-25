import { Head } from "next/document";
import Image from "next/image";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Services from "./components/Service";
import About from "./components/About";
import Populer from "./components/Popular";
import Order from "./components/Order";
import Footer from "./components/Footer";
import Review from "./components/Review";

export default function Home() {
  return (
    <div>
      <Header/>
      <MainLayout>
        <Services />
      </MainLayout>
      <About/>
      <Populer />
      <Order />
      <MainLayout>
        <Review />
      </MainLayout>
      <Footer />
    </div>
  );
}

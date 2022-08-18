import Footer from "@components/footer";
import BannerAbout from "@components/pageSections/aboutPage/bannerSection";
import HistorySection from "@components/pageSections/aboutPage/historySection";
import OfficesSection from "@components/pageSections/aboutPage/officesSection";
import Achievements from "@components/pageSections/aboutPage/statsSection";
import StorySection from "@components/pageSections/aboutPage/storySection";
import TeachersSection from "@components/pageSections/aboutPage/teachersSection";
import WorkValues from "@components/pageSections/aboutPage/workValues";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <BannerAbout />
      <Achievements />
      <StorySection />
      <WorkValues />
      <TeachersSection />
      <HistorySection />
      <OfficesSection />
      <Footer />
    </>
  );
};

export default AboutPage;

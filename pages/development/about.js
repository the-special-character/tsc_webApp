import Layout from "@components/Layouts";
import AboutPage from "@components/pageSections/aboutPage";
import AboutQuery from "@queries/aboutQuery";
import axiosInstance from "lib/axiosInstance";
import React, { useEffect, useState } from "react";
//import data from "../../data/data.json";

// console.log("data:", data);

const About = ({ data }) => {
  console.log("about static data:", data);
  return <AboutPage data={data} />;
};
About.getLayout = function getLayout(page) {
  return <Layout path="development">{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.post("graphql", {
      query: AboutQuery,
      variables: {},
    });
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: error,
      },
    };
  }
}

export default About;

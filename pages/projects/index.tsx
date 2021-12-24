import { NextPage } from "next";
import { LinkComponent, ParentComponent } from "../../components/code";
import Layout from "../../components/layout";

// TODO: implement routes for each induvidual project? [name].tsx?

const Contacts: NextPage = () => {
  return (
    <Layout>
      <ParentComponent name="ProjectsContainer">
        <ParentComponent
          name="FeaturedProject"
          props={[
            { name: "name", value: "FamsList" },
            {
              name: "description",
              value: "Share a shopping list with your family or friends.",
            },
            { name: "type", value: "Mobile App" },
          ]}
        >
          <LinkComponent
            name="Github"
            href="https://github.com/ducktordanny/family-shopping-list"
          />
        </ParentComponent>
        <label htmlFor="separating">{`  {/* -------------------- */}`}</label>
        <ParentComponent
          name="FeaturedProject"
          props={[
            { name: "name", value: "DucktorBlog" },
            {
              name: "description",
              value:
                "Making a blog what has authentication and all sorts of stuff with Angular and NestJS just for fun.",
            },
            { name: "type", value: "Full Stack Web App" },
          ]}
        >
          <LinkComponent
            name="Github"
            href="https://github.com/ducktordanny/ducktor-blog"
          />
        </ParentComponent>
        <label htmlFor="separating">{`  {/* -------------------- */}`}</label>
        <ParentComponent
          name="Project"
          props={[
            { name: "name", value: "Hungary Covid" },
            {
              name: "description",
              value: "Covid site with more data from Hungary.",
            },
            { name: "type", value: "MERN App" },
          ]}
        >
          <LinkComponent
            name="CheckOut"
            href="https://hungarycovid.vercel.app"
          />
          <LinkComponent
            name="Github"
            href="https://github.com/ducktordanny/hungarycovid"
          />
        </ParentComponent>
        <label htmlFor="separating">{`  {/* -------------------- */}`}</label>
        <ParentComponent
          name="Project"
          props={[
            { name: "name", value: "React Falling Emojis" },
            {
              name: "description",
              value:
                "Choose your emojis and make a rain with them. (not released)",
            },
            { name: "type", value: "React Library" },
          ]}
        >
          <LinkComponent
            name="Github"
            href="https://github.com/ducktordanny/react-falling-emojis"
          />
        </ParentComponent>
        <label htmlFor="separating">{`  {/* -------------------- */}`}</label>
        <ParentComponent
          name="Project"
          props={[
            { name: "name", value: "JSX Portfolio" },
            {
              name: "description",
              value: "A simple, but unique JSX style portfolio.",
            },
            { name: "type", value: "Next.js App" },
          ]}
        >
          <LinkComponent
            name="Github"
            href="https://github.com/ducktordanny/jsx-portfolio"
          />
        </ParentComponent>
      </ParentComponent>
    </Layout>
  );
};

export default Contacts;

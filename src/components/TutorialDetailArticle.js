import React from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";

const TutorialDetailArticle = ({ error }) => {
  const tutorialPageSelector = useSelector((state) => state.tutorialPage);
  const {
    loading: pageLoading,
    error: pageError,
    tutorialPage,
  } = tutorialPageSelector;

  return (
    <section>
      {pageLoading ? (
        <Loader />
      ) : pageError ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <article>
          <ReactMarkdown children={tutorialPage.text} />
        </article>
      )}
    </section>
  );
};

export default TutorialDetailArticle;

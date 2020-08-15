// REACT DEPENDENCIES
import React from "react";

// STYLES DEPENDENCIES
import "./index.scss";

// COMPONENT DEPENDENCIES
import { PrimaryHeader } from "../../components/PrimaryHeader";
import { Button } from "../../components/Button";
import { PrimaySub } from "../../components/PrimarySub";
import { useLoadingStatus } from "../../hooks";

export const About = (): JSX.Element => {
  const isLoading = useLoadingStatus(200);

  return (
    <main className={`about${isLoading ? " rotate" : ""}`}>
      <PrimaryHeader firstLine="I'm" secondLine="Andres Lemus" />
      <PrimaySub>A Front End developer currently based in Colombia.</PrimaySub>
      <PrimaySub>Hit me up and let&apos;s create something special</PrimaySub>
      <Button link="/portfolio" text="View Projects" />
    </main>
  );
};

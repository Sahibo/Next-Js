"use client";
import styled from "styled-components";

interface Props {
  width?: number;
  height?: number;
  padding?: number;
  display?:
    | "flex"
    | "flow"
    | "flow-root"
    | "block"
    | "inherit"
    | "grid"
    | "contents"
    | "unset";
  gap?: number | string;
}

export const CustomDiv = styled.div<Props>`
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  padding: ${(props) => (props.padding ? props.padding + "px" : 0)};
  /* display: ${(props) => (props.display ? props.display : "unset")}; */
  gap: ${(props) =>
    props.gap
      ? typeof props.gap === "number"
        ? props.gap + "px"
        : props.gap
      : "0"};
`;

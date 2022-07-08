import { Container, useTheme } from "@mui/material";
import { ReactElement } from "react";

type ContainerFlexProps = {
  children: ReactElement[] | ReactElement;
};

function ContainerFlex(props: ContainerFlexProps) {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="md"
        disableGutters
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0.5rem",
          gap: "10px",
        }}
      >
        {props.children}
      </Container>
    </>
  );
}

export default ContainerFlex;

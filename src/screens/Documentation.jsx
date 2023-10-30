import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import SideNav from "../components/nav/SideNav";
import APICard from "../components/cards/APICard";
import {
  bibleApiEndpoints,
  introAndAuthentication,
} from "../utils/api_documentation";
import colors from "../utils/colors";

const Documentation = () => {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: colors.background }}>
        {/* <SideNav /> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            backgroundColor: " inherit ",
          }}
        >
          <Toolbar />
          <Typography variant="h4" color={colors.primary} mb={2}>
            API Documentation
          </Typography>

          <Typography variant="h5" color={colors.secondary} mb={2}>
            Introduction
          </Typography>
          <Typography paragraph color={colors.primary} mb={2}>
            {introAndAuthentication.Introduction}
            <br />
            {introAndAuthentication.Links.BaseUrl}
          </Typography>

          <Typography variant="h5" color={colors.secondary} mb={2}>
            Swagger Documentation
          </Typography>
          <Typography paragraph color={colors.primary} mb={2}>
            {introAndAuthentication.SwaggerDocumentation}
            <a href={introAndAuthentication.Links.Swagger} style={{ color: colors.primary }}>Swagger documentation.</a>
          </Typography>

          <Typography variant="h5" color={colors.secondary} mb={2}>
            Authentication
          </Typography>
          <Typography paragraph color={colors.primary} mb={2}>
            {introAndAuthentication.Authentication}
          </Typography>


          <Divider color={colors.accent} mb={2} />
          <Typography variant="h5" color={colors.secondary} mt={2} mb={2}>
            Endpoint Details
          </Typography>

          <Grid container spacing={1}>
            {bibleApiEndpoints.map((content, index) => {
              return (
                <Grid item xs={12} md={12}>
                  <APICard
                    key={content?.name}
                    name={content?.name}
                    purpose={content?.purpose}
                    parameters={content?.parameters?.join(", ")}
                    method={content?.method}
                    endpoint={content?.endpoint}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Documentation;

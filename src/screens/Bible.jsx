import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import SideNav from "../components/nav/SideNav";
import colors from "../utils/colors";
import BibleCard from "../components/cards/BibleCard";
import { getVersions } from "../services/VersionsService";
import { Link } from "react-router-dom";

const Bible = () => {
  const [catgeorie, setSort] = React.useState("");
  const [versions, setVersions] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  // fetch the data (versions) from the server
  async function fetchVersions() {
    try {
      const data = await getVersions();
      setVersions(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //handle search input change
  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  React.useEffect(() => {
    fetchVersions();
  }, []);

  //  handle change events of the select
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: colors.background }}>
        <SideNav
          handleChange={handleSearchInputChange}
          searchInput={searchQuery}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            backgroundColor: 'inherit',
          }}
        >
          <Toolbar />
          <Typography
            variant="h5"
            color={colors.primary}
            mb={2}
            fontWeight={"bold"}
          >
            versions
          </Typography>

          <FormControl
            sx={{
              m: 1,
              minWidth: 200,
              backgroundColor: "#ffffff",
              border: "none",
            }}
            size="small"
          >
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={catgeorie}
              label="Sort by"
              sx={{ border: "none" }}
              onChange={handleChange}
            >
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"genre"}>Genre</MenuItem>
              <MenuItem value={"book"}>Book</MenuItem>
            </Select>
          </FormControl>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {versions
              .filter((version) =>
                version.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((version, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Link
                    to={`/biblecontent`}
                    state={{ version }}
                    style={{ textDecoration: "none" }}
                  >
                    <BibleCard Version={version} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Bible;

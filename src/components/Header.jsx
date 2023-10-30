import * as React from 'react'
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery, useTheme, Typography } from '@mui/material'
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import { useNavigate } from "react-router-dom";
import DrawerComp from './DrawerComp';



const PAGES = [
  {
    primary: "Home",
    path: "/home",
  },
  {
    primary: "Bible",
    path: "/bible",
  },
  {
    primary: "API Documentation",
    path: "/apidocumentation",
  },
];

const Header = () => {
  const [value, setvalue] = React.useState("");
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  console.log(isMatch);

  return (
    <React.Fragment>

      <AppBar>
        <Toolbar className='toolbar'>
          <AutoStoriesSharpIcon />

          {
            isMatch ? (
              <>
                <Typography>
                  ORA
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs textColor='inherit'
                  value={value}
                  onChange={(e, value) => setvalue(value)}

                >
                  {
                    PAGES.map((page, index) => (
                      <Tab key={index} label={page.primary} onClick={() => handleClick(page.path)} />
                    ))
                  }
                </Tabs>
              </>
            )
          }

        </Toolbar>

      </AppBar>
    </React.Fragment>
  );


}


export default Header
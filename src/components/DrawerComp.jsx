import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";



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
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
        >
            <List>
                {
                    PAGES.map((page, index) =>(
                    <ListItemButton key={index}
                    onClick={() => handleClick(page.path)}
                    >
                        <ListItemIcon>
                            <ListItemText>{page.primary}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))
                }
                
            </List>
        </Drawer>
        <IconButton sx={{color:'white', marginLeft: 'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
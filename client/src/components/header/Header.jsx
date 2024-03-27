import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Search from "./Search";
import CustomButton from "./CustomButtons";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
      <List>
        <ListItem >
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <MenuButton color="inherit" onClick={handleOpen}>
            <Menu />
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Component to="/">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="logo"
              style={{ width: 75 }}
            />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "yellow" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                alt="SubLogo"
              />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  );
}
export default Header;

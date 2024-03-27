import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px !important",
  overflowX: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 16px;
  font-weigth: bold;
  font-family: inherit;
`;
const Navbar = () => {
  return (
    <>
      <Box style={{ background: "#FFF" }}>
        <Component>
          {navData.map((data) => (
            <Container key={data.text}>
              <img src={data.url} alt="nav" style={{ width: 64 }} />
              <Text>{data.text}</Text>
            </Container>
          ))}
        </Component>
      </Box>
    </>
  );
};

export default Navbar;

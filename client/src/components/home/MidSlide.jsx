import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const RightCompoent = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: "17%",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightCompoent>
        <img src={adURL} alt="ad" style={{ width: 217 }} />
      </RightCompoent>
    </Component>
  );
};
export default MidSlide;

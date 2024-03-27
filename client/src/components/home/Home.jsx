import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useEffect } from "react";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


const Component = styled(Box)`
  padding: 10px 10px;
  background: "#F2F2F2";
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} title="deal of the day" timer={true} />
        <MidSection/>
        <Slide products={products} title="Discount for you" timer={false} />
        <Slide products={products} title="suggested Item" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Item" timer={false} />
        <Slide products={products} title="Tranding Offers" timer={false} />
      </Component>
    </>
  );
};
export default Home;

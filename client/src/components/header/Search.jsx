import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 4px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };
  return (
    <>
      <SearchContainer>
        <InputSearchBase
          onChange={(e) => getText(e.target.value)}
          placeholder="Search more products, brands and more"
          value={text}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {text && (
          <ListWrapper>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => (
                <ListItem>
                  <Link onClick={()=>setText('')}
                  style={{textDecoration:'none', color:'inherit'}}
                  to={`/product/${product.id}`}
                  >{product.title.longTitle}</Link>
                </ListItem>
              ))}
          </ListWrapper>
        )}
      </SearchContainer>
    </>
  );
};
export default Search;

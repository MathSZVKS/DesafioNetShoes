import { useEffect, useState } from "react";
import {
  Grid,
  Page,
  Card,
  ImageWrap,
  Img,
  Info,
  Title,
  Rating,
  Prices,
  OldPrice,
  Price,
  HeartButton,
  HeartIcon,
} from "../styledComponents";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const toggleWishlist = (product) => {
    let updatedWishlist;
    if (wishlist.find((p) => p.code === product.code)) {
      updatedWishlist = wishlist.filter((p) => p.code !== product.code);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const generateStars = (rating = 0) => {
    const full = Math.round(rating);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(full);
  };

  return (
    <Page>
      <Grid>
        {products.map((product) => {
          const inWishlist = wishlist.find(
            (item) => item.code === product.code
          );
          return (
            <Card key={product.code}>
              <ImageWrap>
                <Img src={product.image} alt={product.name} />
                <HeartButton
                  $active={inWishlist}
                  aria-pressed={inWishlist}
                  title={
                    inWishlist
                      ? "Remover da Lista de desejos"
                      : "Adicionar na lista de desejos"
                  }
                  onClick={() => toggleWishlist(product)}
                >
                  <HeartIcon />
                </HeartButton>
              </ImageWrap>
              <Info>
                <Title>{product.name}</Title>
                <Rating>
                  <span>{generateStars(product.rating)}</span>
                  <small>{(product.rating ?? 0).toFixed(1)}</small>
                </Rating>
                <Prices>
                  {product.priceInCents &&
                    String(product.priceInCents) !==
                      String(product.salePriceInCents) && (
                      <OldPrice>
                        R${" "}
                        {(Number(product.priceInCents) / 100).toLocaleString(
                          "pt-BR",
                          { minimumFractionDigits: 2 }
                        )}
                      </OldPrice>
                    )}
                  <Price>
                    R${" "}
                    {(Number(product.salePriceInCents) / 100).toLocaleString(
                      "pt-BR",
                      { minimumFractionDigits: 2 }
                    )}
                  </Price>
                </Prices>
              </Info>
            </Card>
          );
        })}
      </Grid>
    </Page>
  );
}

export default ProductList;

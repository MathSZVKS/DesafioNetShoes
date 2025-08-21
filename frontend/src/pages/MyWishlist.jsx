import { useState, useEffect } from "react";
import {
  Grid,
  Page,
  Card,
  ImageWrap,
  Img,
  RemoveButton,
  Info,
  Title,
  Rating,
  Prices,
  OldPrice,
  Price,
  EmptyContainer,
  EmptyIcon,
} from "../styledComponents";

function MyWishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const removeFromWishlist = (code) => {
    const updated = wishlist.filter((product) => product.code !== code);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const generateStars = (rating = 0) => {
    const full = Math.round(rating);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(full);
  };

  return (
    <Page>
      {wishlist.length === 0 ? (
        <EmptyContainer>
          <EmptyIcon />
          Nenhum produto na sua Lista de desejos
        </EmptyContainer>
      ) : (
        <Grid>
          {wishlist.map((product) => (
            <Card key={product.code}>
              <ImageWrap>
                <Img src={product.image} alt={product.name} />
                <RemoveButton
                  title="Remover da Lista de desejos"
                  onClick={() => removeFromWishlist(product.code)}
                >
                  ×
                </RemoveButton>
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
          ))}
        </Grid>
      )}
    </Page>
  );
}

export default MyWishlist;

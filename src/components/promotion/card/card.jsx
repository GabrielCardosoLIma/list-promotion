import React from "react";
import card from "./card.module.css";

function PromotionCard({promotion}) {
  return (
    <div class={card.promotion_card}>
      <img className={card.promotion_card_image} src={promotion.imageUrl} alt={promotion.title} />
      <div>
        <h1>{promotion.title}</h1>
        <span>$ {promotion.price}</span>
        <footer></footer>
        <div>
            {promotion.comments.length > 0 && (
                <div>
                    "{promotion.comments[0].comment}"
                </div>
            )}
        </div>
        <div>
            {promotion.comments.length}{''}
            {promotion.comments.length >1 ? 'comentários' : 'comentário'}
        </div>
        <a href={promotion.url} target="_blank">IR PARA O SITE</a>
      </div>
    </div>
  );
}

export default PromotionCard;

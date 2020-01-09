import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_fN6gzTPKkbwd8PgRWnMHj7lU00tQgZ5ue2";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful! Your order was placed!');
    }

  return (
    <StripeCheckout
          name="Dark Aroma, LLC."
          label="Place Your Order"
          image="https://banner2.cleanpng.com/20180228/gzw/kisspng-coffee-espresso-cafe-logo-coffee-vector-material-5a9785e220e1d5.5290943815198796501347.jpg"
          description='Homeland for the coffee enthusiasts'
          billingAddress
          shippingAddress
          amount={priceForStripe}
          panelLabel={`Place your order for $${[price]}`}
          token={onToken}
          stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Loading from "../../Component/Loading";

const CheckoutForm = ({ data, refetch }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const { price, name, email, _id } = data;

  useEffect(() => {
    if (price) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
    refetch();
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setLoading(true);

    // Confirm card pement

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setSuccess("");
      setLoading(false);
    } else {
      setCardError("");

      setTransactionId(paymentIntent.id);
      setSuccess("Congrets! Your Pement is completed");

      // update payment mathod and save database
      const payment = {
        transactionId: paymentIntent.id,
        appointment: _id,
      };
      fetch(`http://localhost:5000/myorderPement/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
        });
    }
  };
  return (
    <div>
      <div class="py-3 px-6 border-b border-gray-300">Featured</div>
      <div class="p-6">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="success"
            class=" inline-block px-6 py-2.5 bg-tahitiColor mt-12 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Pay Now
          </button>
        </form>
        {cardError && <p className="text-primary pt-2">{cardError}</p>}
      </div>
      {success && (
        <div className="py-3 border-t text-tahitiColor">
          <p className="font-bold">{success} </p>
          <p className="text-orange-600">{transactionId} </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;

import "./Settings.css";

import { Elements, StripeProvider } from "react-stripe-elements";
import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import BillingForm from "../components/BillingForm";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import { onError } from "../libs/errorLib";
import { useHistory } from "react-router-dom";

export default function Settings() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        setStripe(window.Stripe(config.STRIPE_KEY));
    }, []);

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details,
        });
    }

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
            onError(error);
            return;
        }

        setIsLoading(true);

        try {
            await billUser({
                storage,
                source: token.id,
            });

            alert("Your card has been charged successfully!");
            history.push("/");
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    return (
        <div className="Settings">
            <LinkContainer to="/settings/email">
                <LoaderButton block bsSize="large">
                    Change Email
                </LoaderButton>
            </LinkContainer>
            <LinkContainer to="/settings/password">
                <LoaderButton block bsSize="large">
                    Change Password
                </LoaderButton>
            </LinkContainer>
            <hr />
            <StripeProvider stripe={stripe}>
                <Elements>
                    <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
                </Elements>
            </StripeProvider>
        </div>
    );
}

const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY:
        "pk_test_518losdE7xdRSKaBeRCnR7Mj8l5DZUbmwaF2zDGFXOo2hf3omTGr9ctx2KCKvP1rj4frMVpQSKg7qNSYconPr4Com007kTru1JN",

    s3: {
        REGION: "eu-west-1",
        BUCKET: "notes-bucket-2-jd",
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://ze2pgg8dl3.execute-api.eu-west-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_uXEofxBLl",
        APP_CLIENT_ID: "26hep0u9krgrf6r321ua6pku4r",
        IDENTITY_POOL_ID: "eu-west-1:1bad1362-7b5b-4a26-9668-451a1391d955",
    },
};

export default config;

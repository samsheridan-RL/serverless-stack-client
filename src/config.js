export default {
    s3: {
      REGION: "us-east-2",
      BUCKET: "sam-notes-app"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://4b9f5gylf2.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_3slm3LUJW",
      APP_CLIENT_ID: "6thger2met40r23epdf3dphub4",
      IDENTITY_POOL_ID: "us-east-2:c9119c41-dce8-405e-b106-72cfa0fa2385"
    }
  };
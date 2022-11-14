export default {
  oidc: {
    clientId: '0oa78jtccqALLUaNO5d7',
    issuer: 'https://dev-99325701.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
  },
  widget: {
    useInteractionCodeFlow: 'true',
  },
};

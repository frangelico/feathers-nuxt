const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

// const authentication = require('@feathersjs/authentication');
// const jwt = require('@feathersjs/authentication-jwt');
// const local = require('@feathersjs/authentication-local');
// const logger = require('./logger');

// class MyAuthService extends AuthenticationService {
//   async getPayload(authResult, params) {
//     // Call original `getPayload` first
//     const payload = await super.getPayload(authResult, params);
//     const { user } = authResult;

//     logger.info('User %j',user);
//     logger.info('Payload %j',payload);

//     if (user && user.permissions) {
//       payload.permissions = user.permissions;
//     } else if (user) {
//       payload.permissions = ['admin'];
//     }
 
//     return payload;
//   }
// }

module.exports = function (app) {
  const authService = new AuthenticationService(app);

  authService.register('jwt', new JWTStrategy());
  authService.register('local', new LocalStrategy());

  app.use('/authentication', authService);
  app.configure(expressOauth());

  // const config = app.get('authentication');

  // Set up authentication with the secret
  // app.configure(authentication(config));
  // app.configure(jwt());
  // app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  // app.service('authentication').hooks({
  //   before: {
  //     create: [
  //       authentication.hooks.authenticate(config.strategies)
  //     ],
  //     remove: [
  //       authentication.hooks.authenticate('jwt')
  //     ]
  //   }
  // });
};

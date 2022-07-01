import jsonwebtoken from 'jsonwebtoken';
import services from './services.json';

const jwtTokens = {
  eve: undefined,
};

export const jwtPayload = (service) => {
  return {
    name: service.name,
    iat: Math.floor(new Date().getTime() / 1000),
    exp: Math.floor(new Date().getTime() / 1000) + 3600,
  };
};

export const jwt = async (service) => {
  const payload = jwtPayload(service);

  return await jsonwebtoken?.sign({ ...payload }, service?.private_key, {
    algorithm: 'HS256',
  });
};

export const getNewAuthorizationToken = async (service, projectId) => {
  return await jwt(service);
};

const idToken = async (projectId, service) => {
  if (!jwtTokens[projectId]) {
    const stuff = await getNewAuthorizationToken(service, projectId);
    return stuff;
  } else {
    try {
      const decode = jsonwebtoken.verify(
        jwtTokens[projectId],
        service.private_key,
        { algorithms: ['RS256'] }
      );

      if (decode.exp < Math.floor(new Date().getTime() / 1000)) {
        return await getNewAuthorizationToken(service, projectId);
      } else {
        return authorizationTokens[projectId];
      }
    } catch (err) {
      return await getNewAuthorizationToken(service, projectId);
    }
  }
};

export const getToken = () => {
  return idToken('eve', services['eve']);
};

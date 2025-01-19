import env from '../../env';

const ApiUri = {
    BaseUri:env.BASE_URI,
    ApiUri:env.BASE_URI + '/api',
    login:'/user/login',
    register:'/user/register',
};

export default ApiUri;

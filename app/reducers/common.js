import {
    APP_REDIRECT,
    GET_USERS_REJECTED,
    GET_DETAIL_USER_REJECTED,
    DELETE_USER,
    DELETE_USER_FULFILLED,
    DELETE_USER_REJECTED,
    BLOCK_USER,
    BLOCK_USER_FULFILLED,
    BLOCK_USER_REJECTED,
    APP_LOAD,
    LOGOUT,
    APP_LOAD_FULFILLED,
    GET_PRODUCTS_REJECTED,
    GET_AUCTIONS_REJECTED,
    GET_AUCTION_REJECTED,
    DELETE_AUCTION_REJECTED,
    DELETE_AUCTION,
    DELETE_AUCTION_FULFILLED,
    GET_DETAIL_PRODUCT_REJECTED,
    DELETE_PRODUCT_REJECTED,
    DELETE_PRODUCT,
    DELETE_PRODUCT_FULFILLED,
    GET_CATEGORIES_CONDITIONS_REJECTED,
    CREATE_PRODUCT,
    CREATE_PRODUCT_FULFILLED,
    APP_LOAD_REJECTED,
    LOAD_EDIT_PRODUCT_REJECTED,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_FULFILLED,
    CREATE_AUCTION,
    CREATE_AUCTION_FULFILLED,
    CREATE_AUCTION_REJECTED,
    GET_AUCTION_PRODUCTS_REJECTED,
    EDIT_AUCTION,
    EDIT_AUCTION_FULFILLED,
    EDIT_AUCTION_REJECTED,
    BLOCK_AUCTION,
    BLOCK_AUCTION_FULFILLED,
    BLOCK_AUCTION_REJECTED,
    SEARCH_PRODUCT_REJECTED,
    GET_CAMPAIGNS_REJECTED,
    DELETE_CAMPAIGN,
    DELETE_CAMPAIGN_REJECTED,
    DELETE_CAMPAIGN_FULFILLED,
    FILTER_PRODUCT_REJECTED,
    BLOCK_REVIEW_FULFILLED,
    BLOCK_REVIEW_REJECTED,
    APPROVE_REVIEW_REJECTED,
    APPROVE_REVIEW_FULFILLED,
    DELETE_REVIEW,
    DELETE_REVIEW_REJECTED,
    DELETE_REVIEW_FULFILLED,
    CREATE_CAMPAIGN,
    CREATE_CAMPAIGN_REJECTED,
    CREATE_CAMPAIGN_FULFILLED,
    GET_DETAIL_CAMPAIGN_REJECTED,
    FILTER_CAMPAIGN_REJECTED,
    EDIT_CAMPAIGN_LOAD_REJECTED,
    UPDATE_CAMPAIGN,
    UPDATE_CAMPAIGN_FULFILLED,
    UPDATE_AUCTION_FULFILLED,
    UPDATE_AUCTION_REJECTED,
    LOAD_EDIT_AUCTION_REJECTED,
    CREATE_MESSAGE,
    CREATE_MESSAGE_REJECTED,
    CREATE_MESSAGE_FULFILLED,
    GET_MESSAGE_CATEGORIES_REJECTED,
    DELETE_MESSAGE,
    DELETE_MESSAGE_REJECTED,
    DELETE_MESSAGE_FULFILLED,
    EDIT_MESSAGE_LOAD_REJECTED,
    UPDATE_MESSAGE_FULFILLED,
    UPDATE_MESSAGE_REJECTED,
    UPDATE_MESSAGE,
    GET_LOG_AUCTION_WINER_EJECTED,
    LOAD_USER_COMMENTS_REJECTED,
    APPROVE_USER_COMMENT_FULFILLED,
    APPROVE_USER_COMMENT_REJECTED,
    BLOCK_USER_COMMENT_FULFILLED,
    BLOCK_USER_COMMENT_REJECTED,
    GET_CONTACTS_REJECTED,
    GET_DETAIL_CONTACT_REJECTED,
    REPLY_CONTACT,
    REPLY_CONTACT_FULFILLED,
    REPLY_CONTACT_REJECTED,
    DELETE_CONTACT,
    DELETE_CONTACT_FULFILLED,
    DELETE_CONTACT_REJECTED,
    FILTER_AUCTION_REJECTED,
    GET_PRODUCT_CATEGORIES_REJECTED,
    FILTER_USERS_REJECTED,
    SEARCH_USERS_REJECTED,
    POST_PRODUCT_CATEGORY_REJECTED,
    POST_PRODUCT_CATEGORY,
    POST_PRODUCT_CATEGORY_FULFILLED,
    DELETE_PRODUCT_CATEGORY_REJECTED,
    DELETE_PRODUCT_CATEGORY,
    DELETE_PRODUCT_CATEGORY_FULFILLED,
    GET_CONDITIONS_REJECTED,
    CREATE_CONDITION,
    CREATE_CONDITION_FULFILLED,
    DELETE_CONDITION,
    DELETE_CONDITION_FULFILLED,
    UPDATE_CONDITION,
    UPDATE_CONDITION_FULFILLED,
    GET_CONDITION_REJECTED,
    CREATE_CONDITION_REJECTED,
    DELETE_CONDITION_REJECTED,
    UPDATE_CONDITION_REJECTED,
    GET_USER_ADMINS_REJECTED,
    CREATE_USER_ADMIN_FULFILLED,
    CREATE_USER_ADMIN,
    GET_CONTACT_CATEGORIES_REJECTED,
    POST_CONTACT_CATEGORY,
    POST_CONTACT_CATEGORY_FULFILLED,
    DETAIL_CONTACT_CATEGORY_REJECTED,
    UPDATE_CONTACT_CATEGORY,
    UPDATE_CONTACT_CATEGORY_FULFILLED,
    GET_USER_REPORTS_REJECTED,
    BLOCK_USER_REPORT,
    BLOCK_USER_REPORT_FULFILLED,
    BLOCK_USER_REPORT_REJECTED,
    SEARCH_AUCTION_REJECTED,
    GET_USER_CHANCE_BUY_REJECTE,
    GET_LOG_USER_CHANCE_BUY_REJECTE,
    UPDATE_USER_ADMIN,
    UPDATE_USER_ADMIN_FULFILLED,
    LOG_USER_COIN_CHARGE_REJECTED,
    GET_ALL_PRODUCTS_REJECTED,
    FILTER_AUCTION_BY_PRODUCT_REJECTED,
    LOG_USER_POINT_REJECTED,
    LOG_DISCOUNT_TICKET_REJECTED,
    LOG_PRODUCT_FAVORITE_REJECTED,
    LOG_FRIEND_REJECTED,
    LOG_AUCTION_WINNER_DEFAULT,
    LOG_AUCTION_WINNER_DEFAULT_FULFILLED,
    LOG_AUCTION_WINNER_SUCCESSFUL,
    LOG_AUCTION_WINNER_SUCCESSFUL_FULFILLED,
    LOG_AUCTION_WINNER_FAILS,
    LOG_AUCTION_WINNER_FAILS_FULFILLED,
    LOG_AUCTION_WINNER_DEFAULT_REJECTED,
    LOG_AUCTION_WINNER_SUCCESSFUL_REJECTED,
    LOG_AUCTION_WINNER_FAILS_REJECTED,
    FILTER_LOG_AUCTION_WINNER_REJECTED,
} from '../constants/actionTypes';

const defaultState = {
    appName: 'TokubuyAdmin',
    token: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
        case APP_LOAD_FULFILLED:
            return {
                ...state,
                email: action.payload ? action.payload[0].data.email : null,
                token: action.payload ? action.payload[1] : null
            };
            break;
        case APP_REDIRECT:
            return { ...state, redirectTo: null };
            break;
        case LOGOUT:
            return {
                ...state, redirectTo: '/login'
            };
            break;
        case DELETE_REVIEW:
        case DELETE_REVIEW_FULFILLED:
        case BLOCK_REVIEW_FULFILLED:
        case APPROVE_REVIEW_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/reviews'
                };
            }
            break;
        case DELETE_REVIEW_REJECTED:
        case LOG_FRIEND_REJECTED:
        case LOG_PRODUCT_FAVORITE_REJECTED:
        case LOG_DISCOUNT_TICKET_REJECTED:
        case FILTER_AUCTION_BY_PRODUCT_REJECTED:
        case GET_ALL_PRODUCTS_REJECTED:
        case GET_USER_CHANCE_BUY_REJECTE:
        case GET_LOG_USER_CHANCE_BUY_REJECTE:
        case SEARCH_AUCTION_REJECTED:
        case DELETE_MESSAGE_REJECTED:
        case EDIT_CAMPAIGN_LOAD_REJECTED:
        case FILTER_CAMPAIGN_REJECTED:
        case GET_DETAIL_CAMPAIGN_REJECTED:
        case FILTER_PRODUCT_REJECTED:
        case DELETE_USER_REJECTED:
        case BLOCK_USER_REJECTED:
        case GET_DETAIL_USER_REJECTED:
        case SEARCH_PRODUCT_REJECTED:
        case LOAD_EDIT_PRODUCT_REJECTED:
        case GET_USERS_REJECTED:
        case DELETE_AUCTION_REJECTED:
        case GET_AUCTION_REJECTED:
        case GET_AUCTIONS_REJECTED:
        case APP_LOAD_REJECTED:
        case GET_CATEGORIES_CONDITIONS_REJECTED:
        case GET_PRODUCTS_REJECTED:
        case DELETE_PRODUCT_REJECTED:
        case GET_DETAIL_PRODUCT_REJECTED:
        case CREATE_AUCTION_REJECTED:
        case GET_AUCTION_PRODUCTS_REJECTED:
        case EDIT_AUCTION_REJECTED:
        case BLOCK_AUCTION_REJECTED:
        case GET_CAMPAIGNS_REJECTED:
        case DELETE_CAMPAIGN_REJECTED:
        case BLOCK_REVIEW_REJECTED:
        case APPROVE_REVIEW_REJECTED:
        case CREATE_CAMPAIGN_REJECTED:
        case UPDATE_AUCTION_REJECTED:
        case LOAD_EDIT_AUCTION_REJECTED:
        case CREATE_MESSAGE_REJECTED:
        case GET_MESSAGE_CATEGORIES_REJECTED:
        case EDIT_MESSAGE_LOAD_REJECTED:
        case UPDATE_MESSAGE_REJECTED:
        case GET_LOG_AUCTION_WINER_EJECTED:
        case LOAD_USER_COMMENTS_REJECTED:
        case APPROVE_USER_COMMENT_REJECTED:
        case BLOCK_USER_COMMENT_REJECTED:
        case GET_CONTACTS_REJECTED:
        case GET_DETAIL_CONTACT_REJECTED:
        case REPLY_CONTACT_REJECTED:
        case DELETE_CONTACT_REJECTED:
        case FILTER_AUCTION_REJECTED:
        case FILTER_USERS_REJECTED:
        case SEARCH_USERS_REJECTED:
        case GET_PRODUCT_CATEGORIES_REJECTED:
        case POST_PRODUCT_CATEGORY_REJECTED:
        case DELETE_PRODUCT_CATEGORY_REJECTED:
        case GET_CONDITIONS_REJECTED:
        case GET_CONDITION_REJECTED:
        case CREATE_CONDITION_REJECTED:
        case DELETE_CONDITION_REJECTED:
        case UPDATE_CONDITION_REJECTED:
        case GET_USER_ADMINS_REJECTED:
        case GET_CONTACT_CATEGORIES_REJECTED:
        case DETAIL_CONTACT_CATEGORY_REJECTED:
        case GET_USER_REPORTS_REJECTED:
        case BLOCK_USER_REPORT_REJECTED:
        case LOG_USER_COIN_CHARGE_REJECTED:
        case LOG_USER_POINT_REJECTED:
        case LOG_AUCTION_WINNER_DEFAULT_REJECTED:
        case LOG_AUCTION_WINNER_SUCCESSFUL_REJECTED:
        case LOG_AUCTION_WINNER_FAILS_REJECTED:
        case FILTER_LOG_AUCTION_WINNER_REJECTED:
            if (action.payload.response.body.status === 401) {
                return {
                    ...state, redirectTo: '/login'
                };
            }
            if (action.payload.response.body.status === 404) {
                return {
                    ...state, redirectTo: '/error/404'
                };
            }
            if (action.payload.response.body.status === 400) {
                return {
                    ...state, errors: action.payload.response.body,
                };
            }
            if (action.payload.response.body.status === 500) {
                return {
                    ...state, redirectTo: '/error/500'
                };
            }
            if (action.payload.response.body.status === 422) {
                return {
                    ...state,
                    errors: action.payload.response.body,
                };
            }
            break;

        case DELETE_USER:
        case DELETE_USER_FULFILLED:
        case BLOCK_USER:
        case BLOCK_USER_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/users'
                };
            }
            break;

        case UPDATE_PRODUCT:
        case UPDATE_PRODUCT_FULFILLED:
        case CREATE_PRODUCT:
        case CREATE_PRODUCT_FULFILLED:
        case DELETE_PRODUCT:
        case DELETE_PRODUCT_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/products'
                };
            }
            break;
        case APPROVE_USER_COMMENT_FULFILLED:
        case BLOCK_USER_COMMENT_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/comment-users'
                };
            }
            break;
        case DELETE_AUCTION:
        case DELETE_AUCTION_FULFILLED:
        case CREATE_AUCTION:
        case CREATE_AUCTION_FULFILLED:
        case EDIT_AUCTION:
        case BLOCK_AUCTION:
        case BLOCK_AUCTION_FULFILLED:
        case EDIT_AUCTION_FULFILLED:
        case UPDATE_AUCTION_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/auctions'
                };
            }
            break;

        case POST_PRODUCT_CATEGORY:
        case POST_PRODUCT_CATEGORY_FULFILLED:
        case DELETE_PRODUCT_CATEGORY:
        case DELETE_PRODUCT_CATEGORY_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/type-product-categories'
                };
            }
            break;

        case UPDATE_CAMPAIGN:
        case UPDATE_CAMPAIGN_FULFILLED:
        case DELETE_CAMPAIGN:
        case DELETE_CAMPAIGN_FULFILLED:
        case CREATE_CAMPAIGN:
        case CREATE_CAMPAIGN_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/campaigns'
                };
            }
            break;

        case CREATE_MESSAGE:
        case CREATE_MESSAGE_FULFILLED:
        case DELETE_MESSAGE:
        case DELETE_MESSAGE_FULFILLED:
        case UPDATE_MESSAGE:
        case UPDATE_MESSAGE_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/messages'
                };
            }
            break;

        case REPLY_CONTACT:
        case REPLY_CONTACT_FULFILLED:
        case DELETE_CONTACT:
        case DELETE_CONTACT_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/contacts'
                };
            }
            break;
        case CREATE_CONDITION:
        case CREATE_CONDITION_FULFILLED:
        case DELETE_CONDITION:
        case DELETE_CONDITION_FULFILLED:
        case UPDATE_CONDITION:
        case UPDATE_CONDITION_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/conditions'
                };
            }
            break;

        case UPDATE_USER_ADMIN:
        case UPDATE_USER_ADMIN_FULFILLED:
        case CREATE_USER_ADMIN:
        case CREATE_USER_ADMIN_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/admins'
                };
            }
            break;

        case POST_CONTACT_CATEGORY:
        case POST_CONTACT_CATEGORY_FULFILLED:
        case UPDATE_CONTACT_CATEGORY:
        case UPDATE_CONTACT_CATEGORY_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/type-contact-categories'
                };
            }
            break;

        case BLOCK_USER_REPORT:
        case BLOCK_USER_REPORT_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/report-users'
                };
            }
            break;
        case LOG_AUCTION_WINNER_DEFAULT:
        case LOG_AUCTION_WINNER_DEFAULT_FULFILLED:
        case LOG_AUCTION_WINNER_SUCCESSFUL:
        case LOG_AUCTION_WINNER_SUCCESSFUL_FULFILLED:
        case LOG_AUCTION_WINNER_FAILS:
        case LOG_AUCTION_WINNER_FAILS_FULFILLED:
            if (action.payload.status === 200) {
                return {
                    ...state, redirectTo: '/winner-auctions'
                };
            }
            break;
        default:
            return state;
    }
};

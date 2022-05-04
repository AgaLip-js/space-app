import { NavigationStructure } from "~/types/NavigationStructure";
import Constants from "./constants";

export const socialElements : NavigationStructure = {
    title: 'Community',
    elements: [
        {
            title: 'Activity',
            path: Constants.ROUTE__SOCIAL__ACTIVITY
        },
        {
            title: 'Friends',
            path: Constants.ROUTE__SOCIAL__FRIENDS
        },
        {
            title: 'Posts',
            path: Constants.ROUTE__SOCIAL__POSTS,
        },
        {
            title: 'Shared',
            path: Constants.ROUTE__SOCIAL__SHARED
        },
    ]
};
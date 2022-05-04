import { NavigationStructure } from "~/types/NavigationStructure";
import Constants from "./constants";

export const privateElements : NavigationStructure = {
    title: 'Private',
    elements: [
        {
            title: 'Calendar',
            path: Constants.ROUTE__PRIVATE__CALENDAR
        },
        {
            title: 'Notifications',
            path: Constants.ROUTE__PRIVATE__NOTIFICATIONS
        },
        {
            title: 'Library',
            path: Constants.ROUTE__PRIVATE__LIBRARY,
            subsections: [
                {
                    title: 'Music',
                    path: Constants.ROUTE__PRIVATE__LIBRARY_MUSIC,
                },
                {
                    title: 'Movies',
                    path: Constants.ROUTE__PRIVATE__LIBRARY_MOVIES,
                },
                {
                    title: 'Books',
                    path: Constants.ROUTE__PRIVATE__LIBRARY_BOOKS,
                },
                {
                    title: 'Recipes',
                    path: Constants.ROUTE__PRIVATE__LIBRARY_RECIPES,
                },

            ]
        },
        {
            title: 'Notes',
            path: Constants.ROUTE__PRIVATE__NOTES
        },
    ]
};
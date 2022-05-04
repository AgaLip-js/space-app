import { Dispatch } from 'react';
import Swal from 'sweetalert2';
import { ErrorAction } from '../../interfaces/errorInterface';
import { GET_ERRORS, CLEAR_ERRORS } from './types';

/**
 * Handler for errors
 * @param {object} error - An Error object
 * @param {string} message - If set, this is the message that will be displayed
 * @returns {void}
 */
export const returnErrors = (message: string) => (dispatch: Dispatch<ErrorAction>) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  });

  dispatch({
    type: GET_ERRORS,
    payload: message,
  });
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

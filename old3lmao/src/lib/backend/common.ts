/**
 * @brief   Used to represent a generic error returned from the backend API.
 */
export type ErrorResponse = {
	[fieldName: string]: string[];
};

export type Success<T> = { success: true; value: T };
type Failure<E> = { success: false; error: E };

/**
 * @brief   Used to represent a success or error result from a function.
 */
export type Result<T, E> = Success<T> | Failure<E>;

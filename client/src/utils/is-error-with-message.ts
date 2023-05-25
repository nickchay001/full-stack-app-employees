import { type } from "os";
import { ErrorWithMessage } from "../types";

export const isErrorWhithMessage = (error:unknown):error is ErrorWithMessage => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'data' in error &&
        typeof (error as Record<string, unknown>).data === 'object'
    )
}
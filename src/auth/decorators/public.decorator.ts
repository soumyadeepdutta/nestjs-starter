import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = 'isPublic'
/**
 * This makes a route accessible without authentication
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
import NextAuth, {DefaultSession} from "next-auth"

declare module "next-auth" {
    interface Session {
        user: DefaultSession['user'] & {
            sub?: string,
            type: 'basic' | 'admin',
            id: number
        }
    }
}
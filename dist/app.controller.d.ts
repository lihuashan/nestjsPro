import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
export declare class AppController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(req: any, res: any): Promise<void>;
    reg(body: any, res: any): Promise<void | {
        code: number;
        data: any;
        msg: string;
    }>;
    logout(res: any): Promise<void>;
    getProfile(req: any): any;
    root(res: any, req: any): Promise<{
        msg: string;
        data: any;
    }>;
}

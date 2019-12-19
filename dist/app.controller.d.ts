import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<any>;
    getProfile(req: any): any;
}

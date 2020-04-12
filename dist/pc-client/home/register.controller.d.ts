import { UserService } from '../../user/user.service';
export declare class RegisterController {
    private userService;
    constructor(userService: UserService);
    create(body: any): Promise<import("../../db/users.entity").User>;
    root(res: any, req: any): Promise<{
        msg: string;
        data: boolean;
    }>;
}

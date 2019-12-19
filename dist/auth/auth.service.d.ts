import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<any>;
}

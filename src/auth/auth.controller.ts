import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
     constructor(private authservise: AuthService) {}
    @Post('/signup')
    signup(@Body() authCredentiasDto: AuthCredentialsDto ): Promise<void> {
        return this.authservise.signup(authCredentiasDto);

    }
}

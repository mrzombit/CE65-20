import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { AssetAccountService } from './asset-account.service';
import { CreateAssetAccountDTO } from './dto/create-asset-account.dto';

@Controller('assetAccount')
export class AssetAccountController {

    constructor(private assetAccountService: AssetAccountService){ }

    @Post('/post')
    async addAssetAccount(@Res() res, @Body() createAssetAccountDTO: CreateAssetAccountDTO){
        const newAssetAccount = await this.assetAccountService.addAssetAccount(createAssetAccountDTO);
        return res.status(HttpStatus.OK).json({
            message: 'AssetAccount has been submitted successfully!',
            post: newAssetAccount,
        });
    }
    
}

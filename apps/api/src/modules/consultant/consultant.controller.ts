import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ConsultantService } from './consultant.service';

@Controller('consultant')
export class ConsultantController {
    constructor(private readonly consultant: ConsultantService) {}
    @Get()
    getConsultants() {
        return this.consultant.getAllConsultants();
    }
    @Get('/search')
    getConsultantByName(@Query('keyword') keyword: string) {
        return this.consultant.getConsultantByName(keyword);
    }
    @Post('create')
    createConsultant(@Body() body: any) {
        return this.consultant.createConsultant(body);
    }
}

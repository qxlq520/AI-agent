import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProjectConfigService } from './project-config.service';

@Controller('api/project/config')
export class ProjectConfigController {
  constructor(private readonly configService: ProjectConfigService) {}

  @Post()
  async setConfig(@Body() data) {
    return this.configService.setConfig(data);
  }

  @Get(':id')
  async getConfig(@Param('id') id: string) {
    return this.configService.getConfig(id);
  }
}

import { Controller, Post, Param, Get, Body } from '@nestjs/common';
import { AssetExtractionService } from './asset-extraction.service';

@Controller('api/assets')
export class AssetExtractionController {
  constructor(private readonly assetService: AssetExtractionService) {}

  @Post('extract/:project_id')
  async extractAssets(@Param('project_id') projectId: string) {
    return this.assetService.extractAssets(projectId);
  }

  @Get('characters/:project_id')
  async getCharacters(@Param('project_id') projectId: string) {
    return this.assetService.getCharacters(projectId);
  }

  @Get('scenes/:project_id')
  async getScenes(@Param('project_id') projectId: string) {
    return this.assetService.getScenes(projectId);
  }

  @Post('retry/:type/:id')
  async retryItem(@Param('type') type: string, @Param('id') id: string) {
    return this.assetService.retryItem(type, id);
  }
}

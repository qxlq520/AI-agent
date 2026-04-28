import { Controller, Post, Param, Body } from '@nestjs/common';
import { AssetGenerationService } from './asset-generation.service';

@Controller('api/assets/generate')
export class AssetGenerationController {
  constructor(private readonly generationService: AssetGenerationService) {}

  @Post('character/:id')
  async generateCharacter(@Param('id') id: string, @Body() data) {
    return this.generationService.generateCharacter(id, data);
  }

  @Post('scene/:id')
  async generateScene(@Param('id') id: string, @Body() data) {
    return this.generationService.generateScene(id, data);
  }
}

@Controller('api/assets/upload')
export class AssetUploadController {
  constructor(private readonly generationService: AssetGenerationService) {}

  @Post('character/:id')
  async uploadCharacter(@Param('id') id: string, @Body() data) {
    return this.generationService.uploadCharacter(id, data);
  }

  @Post('scene/:id')
  async uploadScene(@Param('id') id: string, @Body() data) {
    return this.generationService.uploadScene(id, data);
  }
}

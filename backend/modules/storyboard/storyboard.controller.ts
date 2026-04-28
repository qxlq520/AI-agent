import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { StoryboardService } from './storyboard.service';

@Controller('api/storyboard')
export class StoryboardController {
  constructor(private readonly storyboardService: StoryboardService) {}

  @Post('generate/:project_id')
  async generateStoryboard(@Param('project_id') projectId: string, @Body() data) {
    return this.storyboardService.generateStoryboard(projectId, data);
  }

  @Get('list/:project_id')
  async getStoryboardList(@Param('project_id') projectId: string) {
    return this.storyboardService.getStoryboardList(projectId);
  }

  @Get('preview/:episode_id')
  async previewStoryboard(@Param('episode_id') episodeId: string) {
    return this.storyboardService.previewStoryboard(episodeId);
  }
}

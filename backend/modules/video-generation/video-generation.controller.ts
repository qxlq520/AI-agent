import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { VideoGenerationService } from './video-generation.service';

@Controller('api/video')
export class VideoGenerationController {
  constructor(private readonly videoService: VideoGenerationService) {}

  @Post('generate/:episode_id')
  async generateVideo(@Param('episode_id') episodeId: string, @Body() data) {
    return this.videoService.generateVideo(episodeId, data);
  }

  @Get('progress/:task_id')
  async getProgress(@Param('task_id') taskId: string) {
    return this.videoService.getProgress(taskId);
  }

  @Get('list/:project_id')
  async getVideoList(@Param('project_id') projectId: string) {
    return this.videoService.getVideoList(projectId);
  }

  @Get('download/:video_id')
  async downloadVideo(@Param('video_id') videoId: string) {
    return this.videoService.downloadVideo(videoId);
  }
}

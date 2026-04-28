import { Injectable } from '@nestjs/common';

@Injectable()
export class StoryboardService {
  async generateStoryboard(projectId: string, data: any) {
    // TODO: 生成分镜脚本逻辑
    return { success: true, projectId };
  }
  async getStoryboardList(projectId: string) {
    // TODO: 查询所有分镜脚本
    return { success: true, storyboards: [] };
  }
  async previewStoryboard(episodeId: string) {
    // TODO: 预览单集分镜
    return { success: true, episodeId };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetExtractionService {
  async extractAssets(projectId: string) {
    // TODO: NLP抽取角色/场景逻辑
    return { success: true, projectId };
  }
  async getCharacters(projectId: string) {
    // TODO: 查询角色列表
    return { success: true, characters: [] };
  }
  async getScenes(projectId: string) {
    // TODO: 查询场景列表
    return { success: true, scenes: [] };
  }
  async retryItem(type: string, id: string) {
    // TODO: 单项重试
    return { success: true, type, id };
  }
}

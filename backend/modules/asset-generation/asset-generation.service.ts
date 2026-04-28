import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetGenerationService {
  async generateCharacter(id: string, data: any) {
    // TODO: AI生成角色图
    return { success: true, id };
  }
  async generateScene(id: string, data: any) {
    // TODO: AI生成场景图
    return { success: true, id };
  }
  async uploadCharacter(id: string, data: any) {
    // TODO: 手动上传角色图
    return { success: true, id };
  }
  async uploadScene(id: string, data: any) {
    // TODO: 手动上传场景图
    return { success: true, id };
  }
}

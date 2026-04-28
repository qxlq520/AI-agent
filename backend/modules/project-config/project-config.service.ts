import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectConfigService {
  async setConfig(data) {
    // TODO: 配置校验/入库
    return { success: true, config: data };
  }

  async getConfig(id: string) {
    // TODO: 查询配置 by id
    return { success: true, id };
  }
}

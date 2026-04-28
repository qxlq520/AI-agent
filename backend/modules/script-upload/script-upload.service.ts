import { Injectable } from '@nestjs/common';

@Injectable()
export class ScriptUploadService {
  async uploadScript(file: Express.Multer.File) {
    // TODO：文件解析/入库逻辑
    return { success: true, filename: file.originalname };
  }

  async pasteScript(text: string) {
    // TODO：文本校验/入库逻辑
    return { success: true, textLength: text.length };
  }
}

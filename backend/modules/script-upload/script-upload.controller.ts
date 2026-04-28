import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ScriptUploadService } from './script-upload.service';

@Controller('api/script')
export class ScriptUploadController {
  constructor(private readonly uploadService: ScriptUploadService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadScript(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.uploadScript(file);
  }

  @Post('paste')
  async pasteScript(@Body('text') text: string) {
    return this.uploadService.pasteScript(text);
  }
}

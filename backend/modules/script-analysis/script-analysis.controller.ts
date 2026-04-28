import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { ScriptAnalysisService } from './script-analysis.service';

@Controller('api/script')
export class ScriptAnalysisController {
  constructor(private readonly scriptService: ScriptAnalysisService) {}

  @Post('parse/:project_id')
  async parseScript(@Param('project_id') projectId: string) {
    return this.scriptService.parseScript(projectId);
  }

  @Get('parse/progress/:task_id')
  async getParseProgress(@Param('task_id') taskId: string) {
    return this.scriptService.getParseProgress(taskId);
  }

  @Post('rewrite/:project_id')
  async rewriteScript(@Param('project_id') projectId: string, @Body() data) {
    return this.scriptService.rewriteScript(projectId, data);
  }
}

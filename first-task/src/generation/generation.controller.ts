import {
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { GenerationService } from './generation.service';

@Controller()
export class GenerationController {
  constructor(private readonly generationService: GenerationService) {}

  @Post('generate')
  async generate() {
    const generation = await this.generationService.generate();
    return { id: generation.id, value: generation.value };
  }

  @Get('retrieve/:id')
  async retrieve(@Param('id') id: string) {
    const generation = await this.generationService.retrieve(Number(id));
    if (!generation) throw new NotFoundException('ID not found');
    return { id: generation.id, value: generation.value };
  }
}

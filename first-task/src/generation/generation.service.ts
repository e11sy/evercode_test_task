import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Generation } from './generation.entity';

@Injectable()
export class GenerationService {
  constructor(
    @InjectRepository(Generation)
    private generationRepo: Repository<Generation>,
  ) {}

  async generate(): Promise<Generation> {
    const value = Math.floor(Math.random() * 999) + 1;
    const generation = this.generationRepo.create({ value });
    return this.generationRepo.save(generation);
  }

  async retrieve(id: number): Promise<Generation | null> {
    return this.generationRepo.findOne({ where: { id } });
  }
}

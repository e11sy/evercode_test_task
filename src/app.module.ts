import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Generation } from './generation/generation.entity';
import { GenerationModule } from './generation/generation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.sqlite',
      entities: [Generation],
      synchronize: true,
    }),
    GenerationModule,
  ],
})
export class AppModule {}

import { BaseModel } from '@/shared/domain/models/Base.model';

export class Pokemon extends BaseModel {
  name!: string;
  description?: string;
  imageUrl?: string;
}

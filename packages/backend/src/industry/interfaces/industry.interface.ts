import { Document } from 'mongoose';
    
export interface Industry extends Document {
    readonly name: {
        th: string,
        en: string,
    };
    readonly is_b2b: boolean;
    readonly is_b2c: boolean;
    readonly created_date: Date;
}
import { Document } from 'mongoose';
    
export interface PaymentCard extends Document {
    readonly name: {
        th: string,
        en: string,
    };
    readonly logo_url: string;
    readonly is_actived: boolean;
    readonly created_date: Date;
}
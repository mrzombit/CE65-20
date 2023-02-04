import { Document } from 'mongoose';
    
export interface Currency extends Document {
    readonly type: {
        th: {
            name: string,
            weight: number,
        },
        en: {
            name: string,
            weight: number,
        },
    };
    readonly abbreviation: string;
    readonly full_name: string;
    readonly created_date: Date;
}
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export const CROPS = ['tomato', 'sweetpotato', 'blueberry'] as const;
export type CropId = (typeof CROPS)[number];

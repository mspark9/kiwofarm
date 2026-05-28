export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export const CROPS = ['tomato', 'sweetpotato', 'blueberry'] as const;
export type CropId = (typeof CROPS)[number];

export const ONBOARDING_STORAGE_KEY = 'kiwofarm:onboarding';

export const REGION_OPTIONS = [
  { value: '옥천', label: '충북 옥천' },
  { value: '청양', label: '충남 청양' },
  { value: '나주', label: '전남 나주' },
  { value: '담양', label: '전남 담양' },
  { value: '상주', label: '경북 상주' },
  { value: '의성', label: '경북 의성' },
];

export const PREFERRED_CROP_OPTIONS = [
  { value: 'tomato', label: '토마토' },
  { value: 'sweetpotato', label: '고구마' },
  { value: 'blueberry', label: '블루베리' },
  { value: 'strawberry', label: '딸기' },
  { value: 'paprika', label: '파프리카' },
  { value: 'lettuce', label: '상추' },
  { value: 'cucumber', label: '오이' },
  { value: 'pepper', label: '고추' },
];

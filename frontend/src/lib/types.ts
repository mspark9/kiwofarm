export type Mode = 'farming' | 'weekend';

export interface RecommendRequest {
  mode: Mode;
  region: string;
  capital?: number;
  area?: number;
  facility?: string;
  labor?: number;
}

export interface CropRecommendation {
  cropId: string;
  name: string;
  expectedRevenue: number;
  difficulty: 'easy' | 'medium' | 'hard';
  reason: string;
}

export interface PricePoint {
  date: string;
  price: number;
  is_forecast: boolean;
  forecast_low?: number | null;
  forecast_high?: number | null;
}

export interface ShippingDecision {
  score_today: number;
  score_in_3d: number;
  price_today: number;
  price_in_3d: number;
  recommendation: string;
  delta_pct: number;
}

export interface PeerFarmStat {
  region: string;
  total_farms: number;
  farms_aligned: number;
  note: string;
}

export interface ShippingDashboard {
  crop_id: string;
  crop_name: string;
  region: string;
  updated_at: string;
  decision: ShippingDecision;
  price_series: PricePoint[];
  peer: PeerFarmStat;
}

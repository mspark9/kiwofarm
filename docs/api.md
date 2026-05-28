# API 명세

Base URL (local): `http://localhost:8000`

## Health

- `GET /health` → `{"status": "ok"}`

## v1

### 작목 추천

- `POST /api/v1/recommend`
  - Request: `{ mode, region, capital, area, facility, labor }`
  - Response: `{ items: [ { cropId, name, expectedRevenue, difficulty, reason } x3 ] }`

### 디지털 트윈

- `POST /api/v1/twin/simulate`
  - Request: `{ cropId, region, area, facility }`
  - Response: 월별 매출/노동시간 + 위기 타임라인 + AI 코치 한 줄

### 출하 의사결정 대시보드

- `GET /api/v1/dashboard/shipping?crop=tomato&region=옥천`
  - Response: 별점 (오늘/3일 후) + 14일 가격 예측 + 우수농가 패턴

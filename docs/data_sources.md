# 공공데이터 활용 명세

| 데이터 | 시스템 | URL | 활용 기능 |
|---|---|---|---|
| 스마트팜 우수농가 | 농촌진흥청 | https://www.data.go.kr/data/15042594/openapi.do | 작목 추천 학습, 디지털 트윈 기준 |
| 스마트팜 혁신밸리 | 농식품부 | https://www.data.go.kr/data/15121331/openapi.do | 디지털 트윈 시뮬레이션 |
| 스마트팜코리아 CSV | 농정원 | https://www.smartfarmkorea.net/datamart/fclty/list.do?menuId=M11040101 | 우수농가 5호 + 혁신밸리 107호 |
| 농사로 작목·병해충 | 농촌진흥청 | https://www.nongsaro.go.kr | 위기 시점 탐지, 영농 캘린더 |
| KAMIS 도매가 | aT | https://www.kamis.or.kr | 14일 가격 예측, 출하 의사결정 |
| 기상청 ASOS | 기상청 | https://apihub.kma.go.kr | 기후 매칭, 위기 예측 |

## 키 신청 상태

| 시스템 | 신청일 | 승인 상태 | 비고 |
|---|---|---|---|
| 공공데이터포털 (data.go.kr) | | | |
| 스마트팜코리아 | | | CSV 다운로드 |
| KAMIS | | | |
| 기상청 ASOS | | | |
| OpenAI | | | GPT-4o 결제수단 등록 필요 |

## 적재 스크립트

- `backend/scripts/ingest_smartfarm.py` — 스마트팜코리아 CSV → PostgreSQL
- `backend/scripts/ingest_kamis.py` — KAMIS 도매가 → PostgreSQL

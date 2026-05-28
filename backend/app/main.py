from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import dashboard
from app.config import settings

app = FastAPI(title="KiwoFarm API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard.router, prefix="/api/v1")


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}

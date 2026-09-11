FROM python:3.12-slim AS base
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv
WORKDIR /app
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

FROM base AS dev
COPY . .
RUN uv sync --frozen
CMD ["uv", "run", "uvicorn", "ai.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

FROM base AS build
COPY . .
RUN uv sync --frozen --no-dev

FROM python:3.12-slim AS production
WORKDIR /app
COPY --from=build /app /app
ENV PATH="/app/.venv/bin:$PATH"
CMD ["uvicorn", "ai.main:app", "--host", "0.0.0.0", "--port", "8000"]
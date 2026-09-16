from pathlib import Path

root = Path(__file__).resolve().parents[1]
html = (root / "index.html").read_text(encoding="utf-8")

required = (
    "Pilas",
    "Inicio",
    "Movimientos",
    "Planificación",
    "Productos",
    "Fuentes",
)
for marker in required:
    if marker not in html:
        raise SystemExit(f"missing required UI marker: {marker}")

for forbidden in ("<<<<<<<", "=======", ">>>>>>>"):
    if forbidden in html:
        raise SystemExit(f"merge-conflict marker present: {forbidden}")

print("static-smoke: PASS")

"""Generate deterministic, web-sized derivatives from repository source artwork."""
from pathlib import Path
from PIL import Image, ImageOps

PUBLIC = Path(__file__).resolve().parents[1] / "public"


def webp(
    source: Path,
    target: Path,
    width: int,
    height: int | None = None,
    quality: int = 76,
    preserve_alpha: bool = False,
):
    with Image.open(source) as image:
        has_alpha = "A" in image.getbands()
        image = image.convert("RGBA" if preserve_alpha and has_alpha else "RGB")
        if height:
            image = ImageOps.fit(image, (width, height), Image.Resampling.LANCZOS)
        else:
            ratio = min(1, width / image.width)
            image = image.resize((round(image.width * ratio), round(image.height * ratio)), Image.Resampling.LANCZOS)
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, "WEBP", quality=quality, method=6)


hero = PUBLIC / "hero-bg.webp"
for size in (640, 960, 1600):
    webp(hero, PUBLIC / f"hero-bg-{size}.webp", size, round(size * 937 / 1678), 74)
webp(hero, PUBLIC / "og-image.webp", 1200, 630, 78)
webp(PUBLIC / "logo.webp", PUBLIC / "logo-320.webp", 320, quality=80, preserve_alpha=True)

packers = PUBLIC / "packer_movers" / "packer_movers_hero.webp"
for size in (640, 960, 1600):
    webp(packers, PUBLIC / "packer_movers" / f"packer_movers_hero-{size}.webp", size, quality=74)

for name in ("navy_truck", "navy_bike", "navy_movers"):
    webp(PUBLIC / f"{name}.webp", PUBLIC / f"{name}-256.webp", 256, quality=78)

print("Generated responsive hero, social, logo and service-card image derivatives.")

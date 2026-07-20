"""
Generate the 1200x630 social preview card.

This matters more than usual here: the whole funnel ends in WhatsApp, so the
link will mostly be shared *inside* WhatsApp, where the preview card is the
entire first impression. Run with: python3 scripts/og_image.py
"""

import pathlib
import subprocess

from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "site/static/og.png"
PORTRAIT = ROOT / "site/static/koundinya.webp"

W, H = 1200, 630
LIMEWASH = (247, 244, 238)
FOREST = (44, 58, 46)
TERRACOTTA = (181, 100, 60)
INK_SOFT = (107, 98, 89)
SAGE = (138, 154, 123)


def font(name: str, size: int):
    """Resolve a system font, falling back to whatever PIL can find."""
    for path in (
        f"/System/Library/Fonts/Supplemental/{name}",
        f"/Library/Fonts/{name}",
    ):
        if pathlib.Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default(size)


serif = lambda s: font("Georgia.ttf", s)
serif_i = lambda s: font("Georgia Italic.ttf", s)
sans = lambda s: font("Arial.ttf", s)
sans_b = lambda s: font("Arial Bold.ttf", s)


img = Image.new("RGB", (W, H), LIMEWASH)
d = ImageDraw.Draw(img)

# Sage wash echoing the hero's energy-field motif.
glow = Image.new("RGB", (W, H), LIMEWASH)
gd = ImageDraw.Draw(glow)
for i in range(26):
    r = 560 - i * 18
    v = 1 - i / 26
    c = tuple(int(LIMEWASH[k] + (SAGE[k] - LIMEWASH[k]) * v * 0.16) for k in range(3))
    gd.ellipse([840 - r, 300 - r, 840 + r, 300 + r], fill=c)
img = Image.blend(img, glow, 0.9)
d = ImageDraw.Draw(img)

# Portrait on the right, faded at the bottom edge.
if PORTRAIT.exists():
    p = Image.open(PORTRAIT).convert("RGBA")
    p.thumbnail((520, 520), Image.LANCZOS)
    mask = p.getchannel("A")
    fade = Image.linear_gradient("L").resize(mask.size).point(lambda v: 255 if v < 205 else (255 - (v - 205) * 5))
    mask = Image.fromarray((__import__("numpy").asarray(mask) * (__import__("numpy").asarray(fade) / 255)).astype("uint8"))
    img.paste(p, (W - p.width - 60, H - p.height), mask)

# Terracotta rule, top left.
d.rectangle([80, 92, 80 + 54, 92 + 4], fill=TERRACOTTA)

d.text((80, 132), "YOUR PLACE.  YOUR PEACE.", font=sans_b(19), fill=TERRACOTTA)

d.text((80, 190), "Balance your", font=serif(66), fill=FOREST)
d.text((80, 262), "home’s energy.", font=serif(66), fill=FOREST)
d.text((80, 344), "Without breaking", font=serif_i(58), fill=TERRACOTTA)
d.text((80, 408), "a single wall.", font=serif_i(58), fill=TERRACOTTA)

d.line([80, 500, 560, 500], fill=(0, 0, 0, 30), width=1)

d.text((80, 524), "Koundinya Nemana", font=sans_b(26), fill=FOREST)
d.text(
    (80, 562),
    "330+ places corrected  ·  Zero demolition  ·  Hyderabad & worldwide",
    font=sans(20),
    fill=INK_SOFT,
)

img.save(OUT, optimize=True)
print("wrote", OUT, img.size)

# pngquant if available; harmless if not.
try:
    subprocess.run(
        ["pngquant", "--force", "--skip-if-larger", "--output", str(OUT), "--quality", "65-90", str(OUT)],
        check=False,
        capture_output=True,
    )
except FileNotFoundError:
    pass
print("final size", OUT.stat().st_size // 1024, "KB")

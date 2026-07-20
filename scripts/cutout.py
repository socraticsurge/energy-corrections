"""Turn the black studio backdrop into transparency, then trim and resize."""

import numpy as np
from PIL import Image, ImageFilter

SRC = "/Users/vinaychaganti/Downloads/WhatsApp Image 2026-07-20 at 11.46.50.jpeg"
OUT = "/Users/vinaychaganti/Desktop/Koundinya Website/site/static/koundinya.webp"

im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.float32)

# Luminance drives the mask: the backdrop is near-black, the subject is not.
lum = a.max(axis=2)

# Ramp alpha between the two thresholds so edges stay soft rather than jagged.
LO, HI = 18.0, 55.0
alpha = np.clip((lum - LO) / (HI - LO), 0.0, 1.0)

# Flood from the border so any genuinely dark part of the subject (hair, suit
# shadow) that is enclosed by the silhouette stays fully opaque.
from collections import deque

h, w = alpha.shape
bg = np.zeros((h, w), dtype=bool)
q = deque()
soft = alpha < 0.5

for x in range(w):
    for y in (0, h - 1):
        if soft[y, x] and not bg[y, x]:
            bg[y, x] = True
            q.append((y, x))
for y in range(h):
    for x in (0, w - 1):
        if soft[y, x] and not bg[y, x]:
            bg[y, x] = True
            q.append((y, x))

while q:
    y, x = q.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < h and 0 <= nx < w and soft[ny, nx] and not bg[ny, nx]:
            bg[ny, nx] = True
            q.append((ny, nx))

# Only background-connected pixels are allowed to become transparent.
final = np.where(bg, alpha, 1.0)

out = Image.fromarray(np.dstack([np.asarray(im), (final * 255).astype(np.uint8)]), "RGBA")

# Feather the matte very slightly to kill the residual black halo.
a_ch = out.getchannel("A").filter(ImageFilter.GaussianBlur(0.6))
out.putalpha(a_ch)

# Crop to the subject, keeping a little breathing room.
bbox = out.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
out = out.crop(bbox)

# Portrait frame is 4:5; scale to a sensible retina width.
out.thumbnail((900, 900), Image.LANCZOS)
# WebP keeps the alpha channel at roughly a tenth of the PNG weight.
out.save(OUT, "WEBP", quality=86, method=6)

print("saved", OUT, out.size)

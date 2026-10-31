import os
from PIL import Image, ImageFilter
import numpy as np

def make_jet_transparent(src_path, dest_path):
    img = Image.open(src_path).convert("RGBA")
    data = np.array(img)
    
    # RGB channels
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Calculate luminance / brightness
    # Black background has very low brightness (<= 15)
    brightness = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Alpha mask: 0 if brightness <= 12, ramps up to 255 at brightness >= 35
    alpha = np.clip((brightness - 10) / 25.0, 0.0, 1.0) * 255.0
    
    # For dark cockpit windows or navy stripes on the jet, we don't want them erased if they are inside the jet body!
    # Let's use floodfill from (0,0) to find the outer background mask.
    # Let's do a flood fill mask from the edges
    from collections import deque
    h, w = brightness.shape
    visited = np.zeros((h, w), dtype=bool)
    q = deque()
    
    # seed from edges
    for x in range(w):
        if brightness[0, x] < 25:
            q.append((0, x))
            visited[0, x] = True
        if brightness[h-1, x] < 25:
            q.append((h-1, x))
            visited[h-1, x] = True
    for y in range(h):
        if brightness[y, 0] < 25:
            q.append((y, 0))
            visited[y, 0] = True
        if brightness[y, w-1] < 25:
            q.append((y, w-1))
            visited[y, w-1] = True
            
    while q:
        cy, cx = q.popleft()
        for dy, dx in [(-1,0), (1,0), (0,-1), (0,1)]:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                if brightness[ny, nx] < 28:
                    visited[ny, nx] = True
                    q.append((ny, nx))
                    
    # Now visited is the outer background!
    # Anti-alias the edge of visited
    new_a = np.ones((h, w), dtype=np.uint8) * 255
    new_a[visited] = 0
    
    # Smooth edges with PIL
    mask_img = Image.fromarray(new_a, mode='L')
    # Soft blur on edge
    mask_blurred = mask_img.filter(ImageFilter.GaussianBlur(radius=1.2))
    
    # Re-apply
    data[:, :, 3] = np.array(mask_blurred)
    result = Image.fromarray(data, mode='RGBA')
    
    # Crop to bounding box
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        
    result.save(dest_path, "PNG")
    print(f"Saved jet to {dest_path}, size: {result.size}")

def make_dune_transparent(src_path, dest_path):
    img = Image.open(src_path).convert("RGBA")
    data = np.array(img)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    h, w = r.shape
    
    # The sky above the dune is pure black
    brightness = 0.299 * r + 0.587 * g + 0.114 * b
    
    # From top edge down, find first pixel with brightness > 25
    mask = np.zeros((h, w), dtype=np.uint8)
    for x in range(w):
        # find crest
        col = brightness[:, x]
        sand_indices = np.where(col > 15)[0]
        if len(sand_indices) > 0:
            first_sand = sand_indices[0]
            mask[first_sand:, x] = 255
            # anti-alias the transition (2 pixels)
            if first_sand > 0:
                mask[first_sand - 1, x] = int(col[first_sand - 1] / 15.0 * 128)
                
    mask_img = Image.fromarray(mask, mode='L')
    mask_blurred = mask_img.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    data[:, :, 3] = np.array(mask_blurred)
    result = Image.fromarray(data, mode='RGBA')
    result.save(dest_path, "PNG")
    print(f"Saved dune to {dest_path}, size: {result.size}")

if __name__ == "__main__":
    jet_src = r"C:\Users\HP Laptop\.gemini\antigravity-ide\brain\c76fa004-fcf9-4b6b-a773-ec244c0d2083\luxury_private_jet_1792925212436.jpg"
    jet_dest = r"e:\Data\Client Websites\New folder\public\images\luxury-private-jet.png"
    make_jet_transparent(jet_src, jet_dest)
    
    dune_src = r"C:\Users\HP Laptop\.gemini\antigravity-ide\brain\c76fa004-fcf9-4b6b-a773-ec244c0d2083\desert_sand_dune_1792925249591.jpg"
    dune_dest = r"e:\Data\Client Websites\New folder\public\images\desert-sand-dune.png"
    make_dune_transparent(dune_src, dune_dest)

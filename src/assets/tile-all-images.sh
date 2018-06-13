#!/bin/bash

IMG_EXT="jpg"

for img in *_resized.jpg; do
  echo $img;
  tile_dir="tiles/"${img%%.jpg}
  echo $tile_dir
  python  gdal2tiles.py  -p raster -l -z 0-4  $img $tile_dir
done

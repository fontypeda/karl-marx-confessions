#!/bin/bash 

# kleinste größe bestimmt mit: 
# cat original-sizes.info | cut -d" " -f 3 | cut -d"x" -f 1 | sort
TARGET_SIZE=2384

for img in *jpg; do 
	echo $img; 
	convert -resize $TARGET_SIZE ${img} ${img%%.jpg}"_resized.jpg" 
done

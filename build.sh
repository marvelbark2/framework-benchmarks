#!/bin/bash

frameworks_dir="./frameworks"
folders=("$frameworks_dir"/*)
total_folders=${#folders[@]}

for ((i = 0; i < total_folders; i++)); do
    folder="${folders[i]}"
    if [ -d "$folder" ]; then
        echo -e "Processing folder $((i + 1)) / $total_folders: $folder"
        (cd "$folder" && npm run build)
        echo -e "Completed folder $((i + 1)) / $total_folders: $folder\n"
    fi
done

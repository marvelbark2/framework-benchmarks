for folder in ./frameworks/*; do
    if [ -d "$folder" ]; then
        (cd "$folder" && npm ci)
    fi
done

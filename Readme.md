Web Portofolio

npx tailwindcss -i ./src/input.css -o ./public/css/tailwind_output.css --watch
ffmpeg -i <your input video>.mp4 -pix_fmt yuv420p -vcodec libx264 -acodec avc <output file name>.mp4
ffmpeg -y -i input_file.mp4 -c:v libx264 -c:a aac -strict experimental -tune fastdecode -pix_fmt yuv420p -b:a 192k -ar 48000 output_file.mp4

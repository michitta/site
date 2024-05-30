FROM 172.17.0.1:5000/oven/bun:alpine
WORKDIR /app
COPY . /app
RUN bun i
RUN bun run build
EXPOSE 3000
CMD ["bun", "start"]
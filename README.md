# Salt and Light

## Running

You need

- `docker`
- `docker compose`
- `node` 16.x or greater

To develop

1. Run `docker compose up -d` to start a local db
   1. To bring things back down when you're done run `docker compose down`. Data will be persisted across runs, unless you run `docker compose down -v` to remove volumes.
1. `cp backend/.env.example backend/.env`
1. in `./backend` run `npm start`
1. in `./frontend` run `npm run dev`
1. open http://localhost:5173 (or whatever url is printed in your console)

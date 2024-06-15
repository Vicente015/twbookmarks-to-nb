# twbookmarks-to-nb

Imports twitter bookmarks into [nb](https://github.com/xwmx/nb)

## Instructions

1. Export your Twitter bookmarks using [twitter-web-exporter](https://github.com/prinsss/twitter-web-exporter)
2. Copy the json file to the `data/` folder
3. Change the path of the json in `main.ts` first line
4. Run the script `deno run --allow-read=. --allow-write=. main.ts`
5. Import the Markdown files into [`nb`](https://github.com/xwmx/nb) using `nb import ./bookmarks/*.md`

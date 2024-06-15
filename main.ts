import bookmarks from './data/twitter-Bookmarks-1718307402957-nometa.json' with { type: 'json' }
import { oneLine } from "@hexagon/proper-tags";

for (const bookmark of bookmarks) {
  const title = oneLine`${bookmark.screen_name}: "${bookmark.full_text.substring(0, 50)}"`
  const url = bookmark.url.replace('https://twitter.com', 'https://fxtwitter.com')

  const content = `# ${title} - Twitter (twitter.com)

<${url}>

## Description

📅 Date: ${bookmark.created_at}
💬 Replies: ${bookmark.reply_count}
🔁 Retweets: ${bookmark.retweet_count}
❤️ Favorites: ${bookmark.favorite_count}
👁️ Views: ${bookmark.views_count}
🔖 Bookmarks: ${bookmark.bookmark_count}

## Related

- <${bookmark.profile_image_url}>
${bookmark.media.map((media) => `- <${media.url}>`).join('\n')}

## Tags

#twitter ${bookmark.favorited ? '#fav' : ''} ${bookmark.retweeted ? '#rt' : ''}

## Content

${bookmark.name} (@${bookmark.screen_name})
=============

${bookmark.full_text}
`

  Deno.writeTextFileSync(
    `./bookmarks/tw-${bookmark.id}.bookmark.md`,
    content
  );
}

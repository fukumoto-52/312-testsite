// src/utils/instafeed.js
export const loadInstagramFeed = async (selector) => {
  const business_id = "businessID";
  const access_token = "アクセストークン";
  const limit = 3;
  const fields =
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_type,media_url,thumbnail_url,permalink}";

  const feed = document.querySelector(selector);
  if (!feed) return;

  const buildApiUrl = () => {
    const u = new URL(`https://graph.Facebook.com/v23.0/${business_id}/media`);
    u.searchParams.set("fields", fields);
    u.searchParams.set("limit", String(limit));
    u.searchParams.set("access_token", access_token);
    return u.toString();
  };

  const renderItem = (d) => {
    const type = d.media_type;
    let media = d.media_url;
    let thumb = d.thumbnail_url ?? "";

    if (type === "CAROUSEL_ALBUM" && d.children?.data?.length) {
      const first = d.children.data[0];
      media = first.media_url;
      thumb = first.thumbnail_url ?? thumb;
    }

    const col = document.createElement("div");
    col.className = "col";

    const a = document.createElement("a");
    a.className = "feed-card card";
    a.href = d.permalink;
    a.target = "_blank";
    a.rel = "noopener";

    const frame = document.createElement("div");
    frame.className = "feed-card-inner";

    if (type === "VIDEO") {
      const v = document.createElement("video");
      v.src = media;
      if (thumb) v.poster = thumb;
      v.muted = true;
      v.playsInline = true;
      v.autoplay = true;
      v.loop = true;
      v.preload = "metadata";
      frame.appendChild(v);
    } else {
      const img = document.createElement("img");
      img.src = media;
      img.alt = "";
      frame.appendChild(img);
    }

    a.appendChild(frame);
    col.appendChild(a);
    return col;
  };

  const setupAutoplay = () => {
    const videos = [...document.querySelectorAll(".feed-video, .feed-card video")];
    if (!videos.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target;
          if (entry.isIntersecting) v.play().catch(() => {});
          else {
            v.pause();
            v.currentTime = 0;
          }
        }
      },
      { threshold: 0.5 }
    );

    videos.forEach((v) => io.observe(v));
  };

  try {
    const res = await fetch(buildApiUrl(), { cache: "no-store" });
    if (!res.ok) throw new Error(await res.text());

    const { data = [] } = await res.json();
    feed.replaceChildren(...data.map(renderItem));
    setupAutoplay();
  } catch (err) {
    console.error("[Instagram Feed Error]", err);
    feed.innerHTML = `
      <div class="col">
        <div class="alert alert-warning mb-0">Instagramを読み込めませんでした。</div>
      </div>`;
  }
};
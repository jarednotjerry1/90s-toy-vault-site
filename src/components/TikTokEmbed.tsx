"use client";

import { useEffect, useRef } from "react";

interface TikTokEmbedProps {
  videoId: string;
}

export function TikTokEmbed({ videoId }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TikTok embed script if not already loaded
    if (!document.querySelector('script[src*="tiktok.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-process embeds if script already loaded
      if ((window as unknown as Record<string, unknown>).tiktokEmbed) {
        // @ts-expect-error TikTok embed global
        window.tiktokEmbed.lib.render();
      }
    }
  }, [videoId]);

  return (
    <div ref={containerRef} className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@90stoyvault/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: "325px", minWidth: "275px" }}
      >
        <section />
      </blockquote>
    </div>
  );
}

interface TikTokGridProps {
  videos: { id: string; label?: string }[];
}

export function TikTokGrid({ videos }: TikTokGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div key={video.id}>
          {video.label && (
            <p className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)] mb-2 text-center">
              {video.label}
            </p>
          )}
          <TikTokEmbed videoId={video.id} />
        </div>
      ))}
    </div>
  );
}
